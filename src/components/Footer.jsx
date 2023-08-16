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
                {/* <div>
                    <a href='https://www.facebook.com/profile.php?id=100054302299730' target='_blank' >
                        <img
                            src={FbLogo}
                            width='77'
                        />
                    </a>
                </div> */}

                <div className='addressDiv'>
                    <h6><strong>Kelso's Kustom Meats</strong></h6>
                    <p>216 Maple Ave. Snohomish, WA 98290</p>
                    <p>Phone: <a href='tel: 360-568-3065'>(360) 568-3065</a></p>
                </div>

                <div className='krisDiv'>
                    <p
                        style={{ 
                            fontSize: '1.5rem', 
                            color: 'black', 

                        }}
                    >
                        Website by
                        <a href='https://krishvattum.com' target='_blank' className='krisLink'>
                            Kris Hvattum
                        </a>
                    </p>
                </div>


            </div>
            {/* <p style={{ margin: 0, paddingInline: '4rem' }}>&#169; Kelso's Kustom Meats 2023</p> */}
        </footer>
    )
}

export default Footer;