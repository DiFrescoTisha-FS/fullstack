import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';
import "../index.css"

function Navbar({ color }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
    window.google.accounts.id.disableAutoSelect();
    setUser(null);
    setIsDropdownOpen(false);
    navigate('/login');
  };

  const handleCredentialResponse = (response) => {
    const decodedToken = jwtDecode(response.credential);
    const userData = {
      name: decodedToken.name,
      email: decodedToken.email,
      imageUrl: decodedToken.picture,
    };
    setUser(userData);
  };

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      window.google.accounts.id.initialize({
        client_id: '630469049970-161iihf5mjh96rt6mj963asetm2cv665.apps.googleusercontent.com',
        callback: handleCredentialResponse
      });
      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        { theme: 'outline', size: 'large' });
    };

    if (window.google && window.google.accounts) {
      initializeGoogleSignIn();
    } else {
      // Wait for the Google Sign-In library to load.
      window.onload = initializeGoogleSignIn;
    }
  }, []);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className="bg-white max-w-full m-[0 auto] p-[0 15px] flex content-between items-center h-[100%]">
    <nav className="h-[60px] bg-[whitesmoke] relative flex items-center">
      {/* <img src={logo} alt="spotify logo" className="w-[200px] flex flex-row justify-between" priority={true} /> */}
      <ul className={`main-nav ${!user ? 'loading' : 'loaded'}`}>
        <li>
          <NavLink to="/" className="bg-black">Home</NavLink>
        </li>
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li className="top-4">
          <div className="relative">
            {user ? (
              <>
                <button
                  className="flex items-center bg-black space-x-4 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2"
                  onClick={handleToggleDropdown}
                >
                  <img
                    className="rounded-full w-8 h-8"
                    src={user.imageUrl}
                    alt=""
                  />
                  <h3 className="text-gray-400">{user.name}</h3>
                  <FaChevronDown className="h-3" style={{ color: "rgb(128, 128, 128)" }}/>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-38 bg-gray-300 rounded-lg shadow-lg z-10">
                    <button
                      className="block px-2 py-1 text-gray-800 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div id="google-signin-button"></div>
            )}
          </div>
        </li>
      </ul>
      </nav>
    </div>
  );
}

export default Navbar;
