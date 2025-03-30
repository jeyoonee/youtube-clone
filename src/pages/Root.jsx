import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
