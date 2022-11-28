import React from "react";
import { Link } from "react-router-dom";

export const ListPage: React.FC = () => {
  return (
    <>
      <h3>Ola dende List</h3>
      <Link to="/detail">Navigate to Detail page</Link>
    </>
  );
};
