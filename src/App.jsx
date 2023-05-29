import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./Shared/Navbar/Navbar";

function App() {
  const location = useLocation();
  console.log(location);

  const noHeaderLocation = location.pathname.includes("login");

  return (
    <>
      {noHeaderLocation || <NavBar />}
      <Outlet />
    </>
  );
}

export default App;
