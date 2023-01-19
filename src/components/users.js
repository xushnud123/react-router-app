import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h1>Users</h1>
      <Link to={"1"}>Users 1</Link>
      <Link to={"2"}>Users 2</Link>
      <Link to={"3"}>Users 3</Link>
      <Link to={"admin"}>Admin</Link>
      <hr />
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? <h2>Active Users</h2> : <h2>All users</h2>}
    </div>
  );
};
