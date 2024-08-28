import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DropdownButton, Dropdown, Button, InputGroup } from 'react-bootstrap';
import Logoimg from '../Images/Ecomm.png';
import { Badge } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


const HeaderComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src={Logoimg} width={100} height={100} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <InputGroup>

                            <DropdownButton id="dropdown-basic-button" title="All">
                                <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Books</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Cars</Dropdown.Item>
                            </DropdownButton>
                            <Form.Control type="text" placeholder="Search in our shop" />
                            <Button variant="warning"><i className="bi bi-search"></i></Button>{' '}
                        </InputGroup>
                    </Nav>
                    <Nav>
                        <LinkContainer to="/admin/orders">
                            <Nav.Link href="#features">Admin

                                <span className='position-absolute top-1 start-10 translate-middle p-2 bg-danger border
                            border-light rounded-circle'></span>
                            </Nav.Link>
                        </LinkContainer>
                       
                        <NavDropdown title="John Doe" id="basic-nav-dropdown">
                            <NavDropdown.Item eventKey="/user/my-orders" as={Link} to="/user/my-orders">My order</NavDropdown.Item>
                            <NavDropdown.Item eventKey="/user" as={Link} to="/user">My Profile</NavDropdown.Item>
                            <NavDropdown.Item >Logout</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <LinkContainer to="/login">
                            <Nav.Link href="#features">Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/register">
                            <Nav.Link href="#features">Register</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link href="#features"> <Badge pill bg="danger">
                                2
                            </Badge><i className="bi bi-cart3"></i>
                            <span className='ms-1'></span>Cart</Nav.Link>
                        </LinkContainer>

                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderComponent;
