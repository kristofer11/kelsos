import Cutting from '../assets/images/cuttingTomahawk.jpg';
import Tomahawk from '../assets/images/tomahawk.jpg';
import Rosemary from '../assets/images/steakRosemary.jpg';
import Hands from '../assets/images/michael-fousert-qbbUari4hsk-unsplash.jpg';
import Sausage from '../assets/images/rich-smith-15tRu0OgPUk-unsplash.jpg';

// LOGIC FOR CHANGING MAIN BG IMAGE
export const background = () => {
    const backgroundDiv = document.getElementById('background');

    let currentIndex = 0;

    const bgImages = [
        Cutting,
        Tomahawk,
        Rosemary,
        Hands,
        Sausage
    ]

    const changeBgImage = () => {
        currentIndex += 1;

        if (currentIndex >= bgImages.length) {
            currentIndex = 0
        }

        backgroundDiv.style.backgroundImage = `url(${bgImages[currentIndex]})`

    }

    setInterval(changeBgImage, 11000)

}