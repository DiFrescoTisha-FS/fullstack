import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";

function GoogleSignIn() {
  const [userData, setUserData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      try {
        // Send the authorization code to your backend for token exchange
        const tokensResponse = await axios.post(
          "http://localhost:4000/auth/google",
          {
            code,
          }
        );
  
        if (tokensResponse.status === 200) {
          const { access_token, userData } = tokensResponse.data;
  
          // Add the access token to the Axios request headers
          axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
  
          // Now, you can make authenticated requests to other APIs or services using Axios.
          // Example:
          const response = await axios.get("https://api.example.com/resource");
          console.log("Response from authenticated request:", response.data);
  
          setUserData(userData);
        } else {
          console.error("Failed to exchange code for tokens");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    flow: "auth-code",
  });

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Clear user data and close the dropdown
    console.log("Logging out"); // Log that logout is happening
    setUserData(null);
    setIsDropdownOpen(false);
    // You can also send a request to your backend to invalidate the session or tokens
  };

  return (
    <div className="relative">
      {userData ? (
        <div>
          <button
            onClick={handleToggleDropdown}
            className={`flex items-center bg-black space-x-4 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 user-dropdown-button ${
              isDropdownOpen ? "open" : ""
            }`}
          >
            {userData.picture && (
              <img
                className="rounded-full w-8 h-8 user-profile-pic"
                src={userData.picture}
                alt="Profile"
              />
            )}
            <h3 className="text-gray-400 user-name">{userData.name}</h3>
            <FaChevronDown
              className={`h-3 chevron-icon ${
                isDropdownOpen ? "chevron-open" : "chevron-closed"
              }`}
              style={{ color: "rgb(128, 128, 128)" }}
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-38 bg-gray-300 rounded-lg shadow-lg z-10 user-dropdown">
              <button
                onClick={handleLogout}
                className="block px-2 py-1 text-gray-800 hover:bg-gray-100 hover:text-gray-900 w-full text-left user-logout-button"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <button onClick={googleLogin} className="google-button">
          <FcGoogle size={24} />
          <span className="google-text">Sign in with Google</span>
        </button>
      )}
    </div>
  );
}

export default GoogleSignIn;
