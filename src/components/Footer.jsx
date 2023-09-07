import { Navbar, Nav } from 'react-bootstrap'
import MapComponent from '../components/Map';
import FbLogo from '../assets/images/facebook.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <h3>Find Us</h3>

            <div className='mapDiv' id='mapDiv' >
                <MapComponent />
            </div>

            <div className='contactDiv' id='contactDiv'>

                <div className='addressDiv'>
                    <h4><strong>Kelso's Kustom Meats</strong></h4>
                    <p>216 Maple Ave. </p>
                    <p>Snohomish, WA 98290</p>
                    <p>Phone: <a href='tel: 360-568-3065'>(360) 568-3065</a></p>
                </div>

                <div className='hoursDiv'>
                <h5>Hours</h5>
                <ul>
                    <li>Tuesday 9AM-6PM</li>
                    <li>Wednesday: 9AM-6PM</li>
                    <li>Thursday: 9AM-6PM</li>
                    <li>Friday: 9AM-6PM</li>
                    <li>Saturday: 9AM-5PM</li>
                    <li>Sunday & Monday: <em>closed</em></li>
                </ul>
            </div>

            </div>
            {/* <p style={{ margin: 0, paddingInline: '4rem' }}>&#169; Kelso's Kustom Meats 2023</p> */}
            <div className='krisDiv'>
                    <p
                        style={{
                            fontSize: '1.5rem',
                            color: 'black',

                        }}
                    >
                        Website by {' '}
                        <a href='https://krishvattum.com' target='_blank' className='krisLink'>
                            Kris Hvattum{' '}
                        </a>
                        2023
                    </p>
                </div>
        </footer>
    )
}

export default Footer;