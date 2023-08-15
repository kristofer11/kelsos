import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import Logo from '../assets/images/kelsoslogonobg.png';

const Header = () => {
    return (
        <Navbar className='header'>
            <Navbar.Brand href="/">
                <Image
                    src={Logo}
                    width='122'
                />
                <p className='navbarP'>Kustom Meats</p>
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="/login">Our Story</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/find-us ">Find Us</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header