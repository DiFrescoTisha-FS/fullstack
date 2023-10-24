import "./App.css";
// import LoginPage from './pages/login';
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
// import GoogleSignin from "./components/GoogleSignIn";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/auth/google" element={<GoogleSignin />} /> */}

        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
