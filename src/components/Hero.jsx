import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0.7,0.7)',
        config: { duration: 477, delay: 1000 }
      });

      useEffect(() => {
        const timeout = setTimeout(() => {
          setToggle(true);
        }, 200); // Delay in milliseconds (0.5 seconds)
    
        return () => clearTimeout(timeout);
      }, []);

  return (
    <animated.div style={animatedStyle} className='heroDiv'>
        {/* <h1>Kelso's Kustom Meats</h1> */}
        <h3>Home of Snohomish County's best meat market</h3>
    </animated.div>
  )
}

export default Hero