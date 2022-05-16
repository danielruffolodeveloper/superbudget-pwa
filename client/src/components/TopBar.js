import React from 'react'
import { useBudgets } from "../contexts/BudgetsContext"
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const TopBar = () => {
    const { handleSeedBudgets } = useBudgets()
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">React Super Budget</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        <NavDropdown title="Options" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => handleSeedBudgets()}>Seed</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopBar