import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    if (e.target.value.length <= 160) {
      setUsername(e.target.value);
    }
  };

  const handlePassword = (e) => {
    if (e.target.value.length <= 160) {
      setPassword(e.target.value);
    }
  };

  const authorize = (e) => {
    e.preventDefault();

    if (username && password) {
      alert(`Username: ${username}, Password: ${password}`);
    }
  };

  return (
    <form onSubmit={authorize}>
      <label htmlFor="username">Username: </label>
      <input type="text" id="username" placeholder="" value={username} onChange={handleUsername} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="" value={password} onChange={handlePassword} />

      <p>
        <button type="submit" disabled={username.length === 0 || password.length === 0}>
          Log in
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
