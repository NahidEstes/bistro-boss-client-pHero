import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
