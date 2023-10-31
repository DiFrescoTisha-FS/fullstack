import "./App.css";
// import LoginPage from './pages/login';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
// import LoginPage from "./pages/login"
// import Twinkling from "./components/twinkling/Twinkling";
// import GoogleSignin from "./components/GoogleSignIn";

function App() {
  return (
    <>
      {/* <Twinkling /> */}
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}

        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
