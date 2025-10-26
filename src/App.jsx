import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <div className="main flex"><Sidebar/><Dashboard/></div>
    </>
  );
}

export default App;
