import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './styles/nvbarStyle.css'

class Nvbar extends React.Component{

    render() {
        return (
            <Navbar id="nvbar" bg="light" expand="lg" style={{backgroundColor:"transparent"}}>
                <Navbar.Brand href="#home">Smart Production Lab</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#research">Research & Our Works</Nav.Link>
                        <Nav.Link href="#advisor">Advisor</Nav.Link>
                        <Nav.Link href="#MasterStudents">Members</Nav.Link>
                        <Nav.Link href="#photos">Photos</Nav.Link>
                        <Nav.Link href=""></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        );
    }

}

export default Nvbar
