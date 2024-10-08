import UserList from "@functional/Users/UserList";
import Container from "@design/Container/Container";

const Home = () => {
  return (
    <Container>
      <h1>Welkom op de home page</h1>

      <h2>Lijst van users</h2>
      <UserList />
    </Container>
  );
};

export default Home;
