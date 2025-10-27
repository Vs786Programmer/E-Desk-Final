import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import Dashboard from "./Components/Dashboard";
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <Navbar />
      <div className="main flex"><Sidebar/><Dashboard/></div>
      <SpeedInsights />
    </>
  );
}

export default App;
