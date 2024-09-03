import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const login = () => {
    toast.info(
      "The Login Feature has not been implemented yet. Please check back later.",
      {
        theme: "light",
        position: "top-right",
      }
    );
  };

  const register = () => {
    toast.info(
      "The Register Feature has not been implemented yet. Please check back later.",
      {
        theme: "light",
        position: "top-right",
      }
    );
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "gold" }}>
          <FontAwesomeIcon icon={faVideoSlash} />
          Gold
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            {/* <NavLink className="nav-link" to="/watchList">
              Watch List
            </NavLink> */}
            <NavLink className="nav-link" to="/Search">
              Search
            </NavLink>
            <NavLink
              className="nav-link"
              to="https://github.com/justinpope99/React-Movie-API-App"
            >
              © 2024 Justin Pope
            </NavLink>
          </Nav>
          <Button variant="outline-info" className="me-2" onClick={login}>
            Login
          </Button>
          <Button variant="outline-info" onClick={register}>
            Register
          </Button>
        </Navbar.Collapse>
      </Container>
      <ToastContainer />
    </Navbar>
  );
};

export default Header;
