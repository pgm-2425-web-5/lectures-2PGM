import { useState } from "react";

const Tasklist = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const handlePost = () => {
    setTasks([...tasks, task]);
    setTask("");
  };
  return (
    <>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handlePost}>Toevoegen</button>

      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </>
  );
};

export default Tasklist;
