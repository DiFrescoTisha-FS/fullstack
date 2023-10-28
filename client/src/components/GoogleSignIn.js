// import { useState } from "react";
// import { useGoogleLogin } from "@react-oauth/google";
// import { FcGoogle } from "react-icons/fc";
// import { FaChevronDown } from "react-icons/fa";
// import axios from "axios";

// function GoogleSignIn() {
//   const [userData, setUserData] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const googleLogin = useGoogleLogin({
//     onSuccess: async ({ code, idToken }) => {
//       try {
//         const tokensResponse = await axios.post(
//           "http://localhost:4000/auth/google",
//           {
//             code,
//             idToken,
//           }
//         );

//         if (tokensResponse.status === 200) {
//           const { message } = tokensResponse.data;
//           console.log(message);

//           // Now, you can retrieve user data from the server
//           const response = await axios.get("http://localhost:4000/user-data");
//           console.log("User data:", response.data);

//           // Update the state with user data
//           setUserData(response.data);
//         } else {
//           console.error("Failed to exchange code for tokens");
//         }
//       } catch (error) {
//         console.error("An error occurred:", error);
//       }
//     },
//   });

//   const handleToggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLogout = () => {
//     // Perform logout logic here
//   };

//   return (
//     <div>
//       {userData ? (
//         <div>
//           <button onClick={handleToggleDropdown}>
//             <img src={userData.picture} alt="Profile" />
//             <span>{userData.name}</span>
//             <FaChevronDown />
//           </button>
//           {isDropdownOpen && (
//             <div>
//               <button onClick={handleLogout}>Sign out</button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <button onClick={googleLogin}>
//           <FcGoogle />
//           Sign in with Google
//         </button>
//       )}
//     </div>
//   );
// }

// export default GoogleSignIn;
