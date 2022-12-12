import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <input type='search' placeholder='Search Products' />
      <nav>
        <Link to='featured'>Feature</Link>
        <Link to='new'>New</Link>
      </nav>
      <Outlet />
    </div>
  );
}
