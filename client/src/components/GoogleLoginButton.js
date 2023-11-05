// import React from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import axios from 'axios';

// const GoogleLoginButton = () => {
//   const [isLoggedIn, setIsLoggedIn] = React.useState(false);
//   const [user, setUser] = React.useState(null); // Hold user data
//   const [dropdownOpen, setDropdownOpen] = React.useState(false); // Control dropdown menu

//   // Toggle dropdown menu
//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // This function will redirect to your backend route for Google authentication
//   const handleLogin = () => {
//     window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
//   };

//   // This function will handle user logout
//   const handleLogout = async () => {
//     try {
//       await axios.get('/auth/logout');
//       setIsLoggedIn(false);
//       setUser(null); // Reset user state
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   // Fetch authentication status on component mount
//   React.useEffect(() => {
//     const fetchAuthStatus = async () => {
//       try {
//         const response = await axios.get('/api/auth/status');
//         if (response.data.isAuthenticated) {
//           setIsLoggedIn(true);
//           setUser(response.data.user); // Set user data
//         } else {
//           setIsLoggedIn(false);
//         }
//       } catch (error) {
//         console.error('Error fetching auth status:', error);
//         setIsLoggedIn(false);
//       }
//     };
//     fetchAuthStatus();
//   }, []);

//   return (
//     <div className="relative">
//       {isLoggedIn ? (
//         <div className="flex items-center space-x-4">
//           <img className="rounded-full w-8 h-8" src={user.imageUrl} alt={user.name} />
//           <span className="text-gray-700">{user.name}</span>
//           {/* Dropdown Button */}
//           <button onClick={toggleDropdown} className="focus:outline-none">
//             {/* Icon or image for dropdown */}
//           </button>
//           {/* Dropdown Menu */}
//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
//               <button 
//                 onClick={handleLogout}
//                 className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <button
//           className="flex items-center bg-[#e1affd] space-x-4 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2"
//           onClick={handleLogin}
//         >
//           <FcGoogle size={24} />
//           <span className="text-gray-700">Sign in with Google</span>
//         </button>
//       )}
//     </div>
//   );
// };

// export default GoogleLoginButton;
