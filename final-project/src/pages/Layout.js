import React from 'react';
import {Outlet, Link} from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="./compare">Compare</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout;
