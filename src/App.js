// import Header from "./components/Header";
import "../src/css/style.css"
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Drawer from "./components/drawer";

function App() {
  return (
    <div className="App">
      <Outlet/>
<Drawer/>

      <Footer/>
    </div>
  );
}

export default App;
