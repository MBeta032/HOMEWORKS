import { Outlet } from "react-router-dom";
import { Navbar } from "../components/shared/NavBar";
import { Sidebar } from "../components/shared/SideBar";

export function MusicDashboard() {
  return (
    <div className="music-dashboard">
      <Navbar />

      <div className="music-dashboard__layout">
        <Sidebar />

        <main className="music-dashboard__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}