import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";
import './scrolltotop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false) //State Management (useState)

  useEffect(() => {  // Detect Scrolling (useEffect)
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility) //cleanup function.
  }, []) // Dependency Array[]
  return isVisible ? (
    <div className='scroll-div'>
      <a href='#top' aria-label='top' className='scroll-top'>
        <FaArrowUp fontSize='large' />
      </a>
    </div>
  ) : null;
}

export default ScrollToTop;