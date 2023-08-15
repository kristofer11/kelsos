import './App.scss';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import OurStory from './components/OurStory';
import { background } from './features/backgroundLoop';
import { bgImages } from './assets/bgImages';

function App() {
    const [bgIndex, setBgIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        }, 8000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const currentBgImage = bgImages[bgIndex]

    return (
        <>
            <main className='main'>
                <div className='background' id='background' style={{backgroundImage: `url(${currentBgImage})`}} ></div>
                <Header />
                <Hero />
                <OurStory />
            </main>
            <Footer />
        </>
    )
}

export default App
