import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

const UserComponent = ({ currentUser, onSignIn, onSignOut }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!currentUser);
  const [user, setUser] = useState(currentUser);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const size = useWindowSize();
  const isMobile = size.width <= 768;
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownClick = (event) => {
    event.stopPropagation();
    toggleDropdown();
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get('/auth/logout');
      setIsLoggedIn(false);
      setUser(null);
      if (onSignOut) {
        onSignOut();
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await axios.get('/api/auth/status');
        if (response.data.isAuthenticated) {
          setIsLoggedIn(true);
          setUser(response.data.user);
          // Do not call onSignIn here. Just update the state.
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error fetching auth status:', error);
        setIsLoggedIn(false);
      }
    };
    fetchAuthStatus();
  }, []);

  return (
    <div className="lg:block relative bg-black">
      {isLoggedIn ? (
        <div className="flex items-center border-[1px] border-[#ac94f4] space-x-4 opacity-90 cursor-pointer hover:opacity-60 hover:text-black rounded-full p-1 pr-2 mt-4"
             onClick={toggleDropdown}>
          <img className="rounded-full w-8 h-8" src={user.avatar} alt={user.name} onClick={handleDropdownClick} />
          <span className="text-[#ac94f4]" onClick={handleDropdownClick}>{user.name}</span>
          <FaChevronDown onClick={handleDropdownClick} />
          {dropdownOpen && (
            <div ref={dropdownRef} className="absolute top-10 right-0 mt-2 py-2 w-48 bg-[whitesmoke] rounded-md shadow-xl z-20">
              <button 
                onClick={handleLogout}
                className="block px-4 py-2 text-sm capitalize text-[#ac94f4] hover:text-[#ac94f4]"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          className="flex items-center bg-black text-[#ac94f4] border-solid border-2 mb           border-[#ac94f4] space-x-2 mt-5 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-2 pr-2"
          onClick={onSignIn} // Here, we use onSignIn passed down from the parent component
        >
          <FcGoogle size={24} className="large:block" />
          <span className="lg:block text-[#ac94f4]">Sign in with Google</span>
        </button>
      )}
    </div>
  );
};

export default UserComponent;
