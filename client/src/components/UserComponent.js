import React, { useState, useEffect, useRef } from "react";
import { FaGoogle, FaChevronDown } from "react-icons/fa";
import { useAuth } from "../AuthContext"; // Adjust the path as necessary

const UserComponent = () => {
  const { user, logout } = useAuth();
  const isLoggedIn = !!user;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  console.log(user);

  return (
    <div className="relative bg-black">
      {isLoggedIn ? (
        <div
          className="flex items-center border-[1px] border-[#ac94f4] space-x-4 opacity-90 cursor-pointer hover:opacity-60 hover:text-black rounded-full p-1 pr-2 mt-4"
          onClick={toggleDropdown}
        >
          <img
            className="rounded-full w-8 h-8"
            src={user.avatar}
            alt={user.name}
          />
          <span className="text-[#ac94f4]">{user.name}</span>
          <FaChevronDown />
          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-10 right-0 mt-2 py-2 w-48 bg-[whitesmoke] rounded-md shadow-xl z-20"
            >
              <button
                onClick={logout}
                className="block px-4 py-2 text-sm capitalize text-[#ac94f4] hover:text-[#ac94f4]"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          className="flex items-center bg-black text-[#e1affd] border-2 border-[#e1affd] space-x-2 mt-5 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-2 pr-2"
          onClick={() => {
            window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
          }}
        >
          <FaGoogle size={24} />
          <span className="text-[#e1affd]">Sign in with Google</span>
        </button>
      )}
    </div>
  );
};

export default UserComponent;
