import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isHomePage = currentPath === '/home' ||  currentPath === '/';

  // State to track is being scrolled or not
  const [headerRedBackground, setHeaderRedBackground] = useState(false);

  // handling the scroll event
  const handleScroll = () => {
    if (window.scrollY >= 420) {
      setHeaderRedBackground(true);
    } else {
      setHeaderRedBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
      
    // removing the lister when no longer in need
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`border-b-2 ${isHomePage && 'fixed'} w-full top-0 border border-[#b6b6b63b] ${
        headerRedBackground ? 'bg-white' : 'bg-[#ffffff73]'
      }`}
    >
      <Navbar />
    </div>
  );
};

export default Header;