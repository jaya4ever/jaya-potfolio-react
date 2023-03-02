import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation({ navigate, currentPage }) {

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className={currentPage === "about" ? "activelink" : ""} onClick={() => navigate('about')}>About</Nav.Link>
            <Nav.Link href="#" className={currentPage === "portfolio" ? "activelink" : ""} onClick={() => navigate('portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#" className={currentPage === "contact" ? "activelink" : ""} onClick={() => navigate('contact')}>Contact</Nav.Link>
            <Nav.Link href="#" className={currentPage === "resume" ? "activelink" : ""} onClick={() => navigate('resume')}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation