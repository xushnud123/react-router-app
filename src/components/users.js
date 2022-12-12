import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <Link to={"1"}>Users 1</Link>
      <Link to={"2"}>Users 2</Link>
      <Link to={"3"}>Users 3</Link>
      <Link to={"admin"}>Admin</Link>
      <hr />
      <Outlet />
    </div>
  );
};
