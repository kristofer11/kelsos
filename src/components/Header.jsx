import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import Logo from '../assets/images/kelsoslogonobg.png';
import Phone from '../assets/images/icons8-phone.svg';
import FbLogo from '../assets/images/facebook_733547.png'

const Header = () => {
    return (
        <Navbar className='header' expand='md' bg='light' variant='light'>
            <Container>
                <Navbar.Brand href="/">
                    <Image
                        src={Logo}
                        width='301'
                        className='navbarBrandImg'
                    />
                    <p className='navbarP'>Kustom Meats</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarNav' />
                <Navbar.Collapse id='navbarNav'>
                    <Nav>                        
                        <Nav.Link href="#mapDiv " style={{fontSize: '2.5rem'}}>
                            Find Us
                        </Nav.Link>
                        <Nav.Link href='https://www.facebook.com/profile.php?id=100054302299730' target='_blank' >
                            <img
                                src={FbLogo}
                                width='60'
                                className='headerLink'
                            />
                        </Nav.Link>
                        <Nav.Link href="#contactDiv">
                            
                            <img 
                                src={Phone} 
                                className='headerLink'
                                width='75'
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;