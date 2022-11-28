import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isValidCredentials = (username: string, password: string) =>
    username === "admin" && password === "test";

  const handleNavigate = () => {
    isValidCredentials(username, password)
      ? navigate("/list")
      : alert("Wrong credentials");
  };

  return (
    <>
      <h3>Ola dende Login</h3>
      <div>
        <div>
          <label htmlFor="">Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleNavigate}>Login</button>
    </>
  );
};
