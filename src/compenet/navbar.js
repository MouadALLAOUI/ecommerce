import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button, Container, Form, Navbar, NavDropdown } from 'react-bootstrap';

function MyNavbar() {
    return (

        <header>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Acceuil</Nav.Link>
                            <Nav.Link href="/produit">Produit</Nav.Link>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
export default MyNavbar;
