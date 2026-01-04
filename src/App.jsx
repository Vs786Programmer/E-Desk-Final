import { useState } from 'react';
import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import { Outlet, useNavigate } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useAuth } from './hooks/AuthContext';
import PWAInstallPrompt from './Components/PWAInstallPrompt';
import OfflineIndicator from './Components/OfflineIndicator';

function App() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <OfflineIndicator />
      <Navbar onLogout={handleLogout} onMenuClick={toggleSidebar} />
      <div className="flex relative">
        {/* Mobile sidebar overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-30
          transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 transition-transform duration-300 ease-in-out
          bg-white lg:bg-transparent
        `}>
          <Sidebar onLinkClick={() => setIsSidebarOpen(false)} />
        </div>

        {/* Main content */}
        <main className="flex-1 pr-5 bg-white">
          <Outlet />
        </main>
      </div>
      
      {/* PWA Install Prompt */}
      <PWAInstallPrompt />
      
      <SpeedInsights />
    </div>
  );
}

export default App;

