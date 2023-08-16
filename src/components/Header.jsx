import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import Logo from '../assets/images/kelsoslogonobg.png';
import Phone from '../assets/images/icons8-phone-50.svg';
import FbLogo from '../assets/images/facebook.svg'

const Header = () => {
    return (
        <Navbar className='header' expand='md' bg='light' variant='light'>
            <Container>
                <Navbar.Brand href="/">
                    <Image
                        src={Logo}
                        width='301'
                    />
                    <p className='navbarP'>Kustom Meats</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarNav' />
                <Navbar.Collapse id='navbarNav'>
                    <Nav>
                        {/* <Nav.Link href="/login">Our Story</Nav.Link> */}
                        
                        <Nav.Link href="#mapDiv ">Find Us</Nav.Link>
                        <Nav.Link href="#mapDiv ">
                            <img
                                src={FbLogo}
                                width='60'
                            />
                        </Nav.Link>
                        <Nav.Link href="#contactDiv"><img src={Phone} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;