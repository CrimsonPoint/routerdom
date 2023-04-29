import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/">Домашняя страница</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/about">О нас</Link></Nav.Link>
                    <Nav.Link><Link to="/contact">Контакты</Link></Nav.Link>
                    <a href='https://www.ozon.ru/'>ozon</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;