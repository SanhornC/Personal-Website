import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/">Sanhorn Chen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active navbar-link' : 'navbar-link'}>
              About Me
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/experiences" 
              className={location.pathname === '/experiences' ? 'active navbar-link' : 'navbar-link'}>
              Experiences
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects" 
              className={location.pathname === '/projects' ? 'active navbar-link' : 'navbar-link'}>
              Projects
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/connect" 
              className={location.pathname === '/connect' ? 'active navbar-link' : 'navbar-link'}>
              Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}