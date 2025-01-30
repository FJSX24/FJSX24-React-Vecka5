// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router";
import {
  NavLink,
  // Link
} from "react-router";

function Header() {
  // const navigate = useNavigate();

  // function navigateToAboutPage() {
  //   navigate("/about");
  // }
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active-link" to="/">
              Home
            </NavLink>
          </li>
          {/* <li onClick={navigateToAboutPage}>About</li> */}
          <li>
            <NavLink activeClassName="active-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" to="/blog">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
