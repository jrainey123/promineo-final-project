import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'

export default class NavBar extends React.Component{
    render(){
        return(
            <Navbar className='navbar' variant='dark' expand='lg'>  
             <Container>     
                    <Navbar.Brand href="#home">Town Elementary School</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer className="link" to='/'>
                        <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer className="link" to='/create'>
                        <Nav.Link>Add Programs</Nav.Link>
                        </LinkContainer>

                        <LinkContainer className="link" to='/read'>
                        <Nav.Link>Update Programs</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer className="link" to='/read'>
                        <Nav.Link>Reports</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="About" id="basic-nav-dropdown">
                        <LinkContainer className="link" to='/Programs'>
                        <NavDropdown.Item id="drop-item">Programs</NavDropdown.Item>
                        </LinkContainer>


                        <NavDropdown.Item href="#inactive">Instructors - tbd</NavDropdown.Item>
                        
                        
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse> 
              </Container>         
            </Navbar>      
            
        );    
    }
}