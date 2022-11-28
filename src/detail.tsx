import React from "react";
import { Link } from "react-router-dom";

export const DetailPage: React.FC = () => {
  return (
    <>
      <h3>Ola dende Detail</h3>
      <Link to="/list">Back to List page</Link>
    </>
  );
};
