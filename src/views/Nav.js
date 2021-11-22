import '../views/Nav.css';
import {
 NavLink,
} from "react-router-dom";
function Nav() {
    return(
<div className="topnav">
<NavLink to="/" activeClassName="active" exact>
  Home
</NavLink>
<NavLink to="/blogs" activeClassName="active">
Blogs
</NavLink>
<NavLink to="/todos" activeClassName="active">
  Todos
</NavLink>

</div>
    );

}
export default Nav;