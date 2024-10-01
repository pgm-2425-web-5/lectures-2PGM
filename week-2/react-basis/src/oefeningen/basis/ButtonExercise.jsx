import Button from "./Button";

const ButtonExercise = () => {
  return (
    <>
      <Button color="primary" type="button" disabled={false}>
        Primary button
      </Button>
      <Button color="secondary" type="button" disabled={false}>
        Secondary button
      </Button>
    </>
  );
};

export default ButtonExercise;
