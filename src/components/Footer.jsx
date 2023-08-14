import { Navbar, Nav } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className='sticky-bottom'>
            <Navbar>
                &#169; Kelso's Kustom Meats 2023
                <address>
                    <p>216 Maple Ave. Snohomish, WA 98290</p>
                </address>
            </Navbar>

        </footer>
    )
}

export default Footer;