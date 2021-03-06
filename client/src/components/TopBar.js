import React from 'react'
import { useBudgets } from "../contexts/BudgetsContext"
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const TopBar = () => {
    const { handleSeedBudgets, handleInitialiseBudgets,handleDeleteAllBudgets } = useBudgets()
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">React Super Budget</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Options" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => handleInitialiseBudgets()}>Create Budget</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleSeedBudgets()}>Create Seeded Budget</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleDeleteAllBudgets()}>Delete Budget</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopBar