import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import TestPage from './pages/test';

function App() {
  // You can implement authentication logic here
  const isAuthenticated = /* Your authentication logic here */ false;

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Welcome to your App</h1>} />
        <Route path='/test' element={ <TestPage />} />
        <Route
          path='/login'
          element={isAuthenticated ? <Navigate to='/dashboard' /> : <LoginPage />}
        />
        <Route
          path='/dashboard'
          element={isAuthenticated ? <Dashboard /> : <Navigate to='/login' />}
        />
      </Routes>
    </>
  );
}

export default App;
