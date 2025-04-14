import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";

export default function Layout() {
  return (
    <div >
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}