import { Navbar, Nav } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className='footer'>
            <div>

                <p>&#169; Kelso's Kustom Meats 2023</p>

                <a href='/'>
                    <p>216 Maple Ave. Snohomish, WA 98290</p>
                </a>
                <p>Phone: <a href='tel: 360-568-3065'>(360) 568-3065</a></p>
            </div>

        </footer>
    )
}

export default Footer;