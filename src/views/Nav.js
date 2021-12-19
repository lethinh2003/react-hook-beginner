import "../views/styles/Nav.css";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="topnav">
      <NavLink to="/react-hook-beginner/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/react-hook-beginner/blogs" activeClassName="active">
        Blogs
      </NavLink>
      <NavLink to="/react-hook-beginner/todos" activeClassName="active">
        Todos
      </NavLink>
    </div>
  );
}
export default Nav;
