import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  return (
    <>
      <h3>Ola dende Detail</h3>
      <h4>User ID: {id}</h4>
      <Link to="/list">Back to List page</Link>
    </>
  );
};
