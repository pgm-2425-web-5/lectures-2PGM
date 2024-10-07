import UserList from "@functional/Users/UserList";

const Home = () => {
  return (
    <section>
      <h1>Welkom op de home page</h1>

      <h2>Lijst van users</h2>
      <UserList />
    </section>
  );
};

export default Home;
