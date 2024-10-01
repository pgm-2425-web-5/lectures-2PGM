import classes from "./HomeAlt.module.css";
import Button from "./Button";
import Container from "./Container";

const HomeAlt = () => {
  return (
    <div className={classes.home}>
      <h1 className={classes["home__title"]}>Welkom</h1>
      <Container className={classes["home__info"]}>
        <button className={classes.button}>Original</button>
        <Button>Component</Button>
      </Container>
    </div>
  );
};

export default HomeAlt;
