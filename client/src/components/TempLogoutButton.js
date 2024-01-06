import { useAuth } from "../AuthContext"; // Adjust the path as necessary

const TempLogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return <button onClick={handleLogout} className="text-white">Temporary Logout</button>;
};

export default TempLogoutButton;