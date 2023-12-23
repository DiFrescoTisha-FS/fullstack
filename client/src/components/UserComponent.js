import { useState, useEffect, useRef } from "react";
import { FaGoogle, FaChevronDown } from 'react-icons/fa';
import axios from 'axios';

const UserComponent = ({ currentUser, onSignIn, onSignOut }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!currentUser);
  const [user, setUser] = useState(currentUser);
  const [dropdownOpen, setDropdownOpen] = useState(false);

    // Ref for the dropdown to check for outside clicks
    const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

    // Close the dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
  
    useEffect(() => {
    // Attach the listener to the window on mount
    window.addEventListener('mousedown', handleClickOutside);
    // Remove the listener on cleanup
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogin = () => {
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
  };

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
          if (onSignIn) {
            onSignIn(response.data.user);
          }
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
    <div className="relative bg-black">
      {isLoggedIn ? (
        <div className="flex items-center border-[1px] border-[#e1affd] space-x-4 opacity-90 cursor-pointer hover:opacity-60 hover:text-black rounded-full p-1 pr-2 mt-4"
             onClick={toggleDropdown}>
          <img className="rounded-full w-8 h-8" src={user.avatar} alt={user.name} />
          <span className="text-[#e1affd]">{user.name}</span>
          <FaChevronDown />
          {dropdownOpen && (
            <div ref={dropdownRef} className="absolute top-10 right-0 mt-2 py-2 w-48 bg-[whitesmoke] rounded-md shadow-xl z-20">
              <button 
                onClick={handleLogout}
                className="block px-4 py-2 text-sm capitalize text-[#e1affd] hover:text-[#e1affd]"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          className="flex items-center bg-black text-[#e1affd] border-1 mb-1 border-[#e1affd] space-x-2 mt-5 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-2 pr-2"
          onClick={handleLogin}
        >
          <FaGoogle size={24} />
          <span className="hidden lg:block text-[#e1affd]">Sign in with Google</span>
        </button>
      )}
    </div>
  );
};

export default UserComponent;
