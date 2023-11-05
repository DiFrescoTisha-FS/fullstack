// import React, { useState } from 'react';
// import { BiSolidChevronDown } from "react-icons/bi"

// const ProfileDropdown = ({ user, handleSignOut }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   // Toggle the dropdown menu
//   const toggleDropdown = () => {
//     console.log("Toggle dropdown called");
//     setDropdownOpen(!dropdownOpen);
//   };
  

//   // Close the dropdown menu
//   const closeDropdown = () => {
//     setDropdownOpen(false);
//   };

//   // Call the passed handleSignOut function
//   const logout = () => {
//     handleSignOut();
//     closeDropdown();
//   };

//   return (
//     <div className="relative">
//       <div className="user-dropdown-button bg-gray-200 flex items-center space-x-4" onClick={toggleDropdown}>
//         <img className="rounded-full w-8 h-8" src={user.imageUrl} alt={user.name} />
//         <span className="text-gray-700">{user.name}</span>

//         <div className="rounded-full bg-gray-200 p-1">
//           <BiSolidChevronDown />
//           {/* Placeholder for dropdown icon */}
//         </div>
//       </div>
//       {dropdownOpen && (
//         <div className="absolute right-0 mt-2 py-2 w-48 bg-pink-500 rounded-md shadow-xl z-20">
//           <button
//             onClick={logout}
//             className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;
