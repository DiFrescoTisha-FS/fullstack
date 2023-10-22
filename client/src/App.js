import "./App.css";
import LoginPage from './pages/login';
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={ <LoginPage /> } />

        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
    </>
  )
}
export default App;
