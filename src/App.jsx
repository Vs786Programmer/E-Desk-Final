import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import { Outlet, useNavigate } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useAuth } from './context/AuthContext';

function App() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />
      <div className="main flex">
        <Sidebar/>
        <Outlet/>
      </div>
      <SpeedInsights />
    </>
  );
}

export default App;

