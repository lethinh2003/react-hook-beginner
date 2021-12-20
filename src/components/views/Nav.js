import "../../assets/styles/Nav.css";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="topnav">
      <NavLink to="/react_redux_todo/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/react_redux_todo/blogs" activeClassName="active">
        Blogs
      </NavLink>
      <NavLink to="/react_redux_todo/todos" activeClassName="active">
        Todos
      </NavLink>
    </div>
  );
}
export default Nav;
