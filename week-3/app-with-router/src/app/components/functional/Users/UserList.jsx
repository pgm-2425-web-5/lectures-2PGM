import { useEffect, useState } from "react";
import ListItem from "@design/ListItem/ListItem";

const UserList = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        setError(String(error));
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!users) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <ListItem key={user.id}>{user.name}</ListItem>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
