import { Navbar, Nav } from 'react-bootstrap'
import MapComponent from '../components/Map';
import FbLogo from '../assets/images/facebook.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <h2>Find Us</h2>

            <div className='mapDiv' id='mapDiv' >
                <MapComponent />
            </div>

            <div className='contactDiv' id='contactDiv'>
                <a href='https://www.facebook.com/profile.php?id=100054302299730' target='_blank' >
                    <img 
                        src={FbLogo} 
                        width='55'
                    />
                </a>
                <a href='/'>
                    <p>216 Maple Ave. Snohomish, WA 98290</p>
                </a>
                <p>Phone: <a href='tel: 360-568-3065'>(360) 568-3065</a></p>
                <p>&#169; Kelso's Kustom Meats 2023</p>
            </div>

        </footer>
    )
}

export default Footer;