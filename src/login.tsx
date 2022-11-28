import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./components/loginForm";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const isValidCredentials = (username: string, password: string) =>
    username === "admin" && password === "test";

  const handleNavigate = (username: string, password: string) => {
    isValidCredentials(username, password)
      ? navigate("/list")
      : alert("Wrong credentials");
  };

  return <LoginForm onSubmit={handleNavigate} />;
};
