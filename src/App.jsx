import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import { Outlet } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <Navbar />
      <div className="main flex"><Sidebar/><Outlet/></div>
      <SpeedInsights />
    </>
  );
}

export default App;
