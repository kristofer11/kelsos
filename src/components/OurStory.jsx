import Liam from '../assets/images/liam-cropped.png';

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
                        <li><em><strong>Feel free to <button href='tel: 360-568-3065' className='callLink'>call ahead</button> to place your order</strong></em></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OurStory;