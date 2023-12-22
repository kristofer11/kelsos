import Liam from '../assets/images/liam-cropped.png';
import Phone from '../assets/images/icons8-phone.svg'

const OurStory = () => {
    return (
        <div className='ourStory'>
            <h2 style={{ color: '#566A39' }}>We specialize in friendly, personal service and exceptional quality. </h2>
            <div className="ourStoryContent d-flex flex-wrap text-center mt-4">
                <div className="ourStoryImg">
                    <img src={Liam} alt="Experienced Butcher at Kelso's Kustom Meats, Snohomish County, WA" width='400' />
                </div>
                <div className='ourStoryText'>
                    <ul>
                        <li><span className='check'>✔</span> Game processing </li>
                        <li><span className='check'>✔</span> Wide variety of hand-cut, fresh meats to suit your preferences</li>
                        <li><span className='check'>✔</span> Delicious selection of cured meats</li>
                        <li className='d-flex justify-content-center align-items-center gap-2'>
                            <span><em><strong>Feel free to call ahead to place your order</strong></em></span>
                            <a className='d-md-block d-none bodyCallLink'  href='tel: 360-568-3065' >
                                <img
                                    src={Phone}
                                    className='headerLink bodyLink'
                                    width='52'
                                />
                            </a>
                        
                        </li>
                        <li>
                            <a className='d-md-none callLink'  href='tel: 360-568-3065' >
                                <img
                                    src={Phone}
                                    className='headerLink bodyCallLink'
                                    width='66'
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OurStory;