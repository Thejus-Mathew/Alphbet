import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import toggleImage from '../assets/toggleImage.png'
import logo from '../assets/logoNew.jpg'
import logoWord from '../assets/logoWordNew.jpg'


function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" style={{position:"sticky",top:"0",backgroundColor:"white",zIndex:"5"}} >
      <Container fluid>
        <Navbar.Brand href="#header">
            <div className="d-flex align-items-center">
                <img src={logo} height={"40px"} alt=""/>
                <img src={logoWord} height={"30px"} alt="" />
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundImage:`url(${toggleImage})`,backgroundPosition:"center",backgroundSize:"contain"}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#header" className='logoColor'>Home</Nav.Link>
            <Nav.Link href="#services" className='logoColor'>Services</Nav.Link>
            <Nav.Link href="#contact" className='logoColor'>Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Courses"
              className="me-2 custom-search-input"
              aria-label="Search"
            />
            <Button className='custom-outline' variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
