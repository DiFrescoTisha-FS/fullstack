
import "./App.css";
// import LoginPage from './pages/login';
// import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import "./App.css"
// import Twinkling from "./components/twinkling/Twinkling";

function App() {

  return (
    <>
      {/* <Twinkling /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
