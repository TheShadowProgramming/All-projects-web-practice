import React, {useState, useEffect} from "react";
import { PropTypes } from "prop-types";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import paramLogo from "../../assets/ParamTransCropped-transformed.png";

function NavbarComponent(props) {
  const [delayAfterRender, setDelayAfterRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayAfterRender(true)
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      <Navbar expand="lg" variant="light" bg="transparent" fixed="top" className={delayAfterRender ? 'navbar-visible' : 'navbar-hidden'}>
        <Container className="navbar-fragment">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={paramLogo}
              width="30"
              height="30"
              className="d-inline-block align-top param-trans"
            />{" "}
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              className={
                props.activeSection == "home"
                  ? "navbarButton yellowBorder"
                  : "navbarButton"
              }
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={
                props.activeSection == "services"
                  ? "navbarButton yellowBorder"
                  : "navbarButton"
              }
              href="#services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className={
                props.activeSection == "clients"
                  ? "navbarButton yellowBorder"
                  : "navbarButton"
              }
              href="#clients"
            >
              Clients
            </Nav.Link>
            <Nav.Link
              className="navbarButton"
              href="https://paramdigi.com/blog"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              className={
                props.activeSection == "team"
                  ? "navbarButton yellowBorder"
                  : "navbarButton"
              }
              href="#team"
            >
              Team
            </Nav.Link>
            <Nav.Link
              className={
                props.activeSection == "contact"
                  ? "navbarButton yellowBorder"
                  : "navbarButton"
              }
              href="#contact"
              id="shitHitsTheFan"
            >
              Enquire
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

NavbarComponent.propTypes = {
  activeSection: PropTypes.string.isRequired,
};

export default NavbarComponent;
