import { NavLink } from 'react-router-dom';
import './MainNav.scss';

export function MainNav() {
  return (
    <div role="navigation">
      <nav className="main-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/api-requests-example">API Requests Example</NavLink>
        <NavLink to="/formik-example">Formik Example</NavLink>
        <NavLink to="/router-params">Router Params</NavLink>
        <NavLink to="/redux-counter">Redux Counter</NavLink>
        <NavLink to="/redux-todo">Redux TODO</NavLink>
      </nav>
    </div>
  );
}
