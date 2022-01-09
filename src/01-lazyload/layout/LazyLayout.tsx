import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';
import { routes } from '../../routes/routes';

export const LazyLayout = () => {
  return (
    <div>
      <h1> LazyLayout </h1>
      <ul>
        <li>
          <NavLink
            to="lazy1"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Lazy1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="lazy2"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Lazy2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="lazy3"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Lazy3
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route key="lazy1" path="lazy1" element={<LazyPage1 />} />
        <Route key="lazy2" path="lazy2" element={<LazyPage2 />} />
        <Route key="lazy3" path="lazy3" element={<LazyPage3 />} />

        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
