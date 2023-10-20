import "./App.css";
import LoginPage from './pages/login';

import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={ <LoginPage /> } />

        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
    </>
  )
}
export default App;
