import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import Logo from '../assets/images/kelsoslogonobg.png';

const Header = () => {
    return (
        <Navbar className='header' expand='md' bg='light' variant='light'>
            <Container>
                <Navbar.Brand href="/">
                    <Image
                        src={Logo}
                        width='222'
                    />
                    {/* <p className='navbarP'>Kustom Meats</p> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarNav' />
                <Navbar.Collapse id='navbarNav'>
                    <Nav>
                        {/* <Nav.Link href="/login">Our Story</Nav.Link> */}
                        <Nav.Link href="#contactDiv">Contact</Nav.Link>
                        <Nav.Link href="#mapDiv ">Find Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;