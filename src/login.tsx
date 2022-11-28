import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/list");
  };

  return (
    <>
      <h3>Ola dende Login</h3>
      <button onClick={handleNavigate}>Login</button>
    </>
  );
};
