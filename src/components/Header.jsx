import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import Logo from '../assets/images/kelsoslogonobg.png';
import Phone from '../assets/images/icons8-phone.svg';
import FbLogo from '../assets/images/facebook_733547.png';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0.7,0.7)',
        config: { duration: 400 }
    });

    useEffect(() => {
        setToggle(true);
    }, [])

    return (
        <Navbar className='header' expand='md' bg='light' variant='light'>
            <Container>
                <animated.div style={animatedStyle}>
                    <Navbar.Brand href="/">

                        <Image
                            src={Logo}
                            width='255'
                            className='navbarBrandImg'
                        />


                        <p className='navbarP'>Kustom Meats</p>
                    </Navbar.Brand>
                </animated.div>
                <Navbar.Toggle aria-controls='navbarNav' />
                <Navbar.Collapse id='navbarNav'>
                    <Nav>
                        <Nav.Link href="#mapDiv " style={{ fontSize: '1.88rem' }}>
                            Hours & Location
                        </Nav.Link>
                        <Nav.Link href='https://www.facebook.com/profile.php?id=100054302299730' target='_blank' >
                            <img
                                src={FbLogo}
                                width='44'
                                className='headerLink'
                            />
                        </Nav.Link>
                        <Nav.Link href='tel: 360-568-3065' className='d-lg-none'>

                            <img
                                src={Phone}
                                className='headerLink'
                                width='52'
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;