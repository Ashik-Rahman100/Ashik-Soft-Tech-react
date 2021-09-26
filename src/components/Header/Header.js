import React from 'react';
import './Header.css';
import{Navbar,Container,NavDropdown,Nav,Card} from 'react-bootstrap';
const Header = () => {
    return (
<div >
  <div >
    {/* Nav ber  */}
    <Navbar  bg="dark" variant="dark" expand="lg" fixed="top">
       <Container>
         <Navbar.Brand href="#home" className = 'fw-bold'>ASHIK SOFT TECH</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
             </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
</div>

    {/* Header info */}
    <div className = 'card'>
      
    <Card >
    <Card.Body>
     
        <Card.Title> <h1 className ='fw-bold '> BUILD A <span className = 'line-highlight'>PROJECT</span></h1></Card.Title>
        <div className = 'header-text'>
        <h6>
           We provide user experience, production, digital marketing and maintenance services that enable our clients to communicate, deliver services to their customers and operate more efficiently.
           We specialise in understanding the problems and challenges the financial services sector faces and use  digital   technology to deliver smart solutions.
        </h6>
        
        <h2><span className='line-highlight'>Our Budgets :</span>  $100 M</h2>
        </div>
    </Card.Body>
</Card>
    </div>

</div>
);
};

export default Header;