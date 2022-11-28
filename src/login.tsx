import React from "react";
import { Link } from "react-router-dom";

export const LoginPage: React.FC = () => {
  return (
    <>
      <h3>Ola dende Login</h3>
      <Link to="/list">Navigate to List page</Link>
    </>
  );
};
