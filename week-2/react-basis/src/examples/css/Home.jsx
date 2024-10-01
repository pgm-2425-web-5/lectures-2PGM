import "./Home.css";
import Button from "./Button";
import Container from "./Container";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Welkom</h1>
      <Container>
        <button className="button">Original</button>
        <Button>Component</Button>
      </Container>
    </div>
  );
};

export default Home;
