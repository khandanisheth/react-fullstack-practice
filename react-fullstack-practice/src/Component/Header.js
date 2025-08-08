import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/boots">Bootstrap</Nav.Link>

                        <NavDropdown title="Pages" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/list">List</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/prop">Prop</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/fontaw">FontAwUse</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/stm">StateComDidMoun</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/cm">ClassComo</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/sf">StateFull</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/sp">StateProps</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/eh">Eventhandling</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/el">IfElseRendring</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/module">ModuleUse</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pass">ShowPasswordHide</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/resmenu">R14ResponsivMenu</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/logmo">R15LoginModel</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/faq">R16Faqu</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/crud">R17CRUD</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/propdriling">R18PropsDrilling</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/notify">R_19_ReactToastify</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/todo">R_20_ToDoList</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tab">R_21_TabbingSystem</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/passgen">R_22_PasswordGenreter</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/weather">R_23_WeatherApp</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/usecon">R_24_useContext</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/useref">R_25_useRef</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/usered">R_26_useReducer</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/usememo">R_27_useMemo</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/usememoboot">R_27_useMemoBoot</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/usecall">R_28_useCallback</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/ruf">Ruf</NavDropdown.Item>
                        </NavDropdown>
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
    );
}

export default Header;
