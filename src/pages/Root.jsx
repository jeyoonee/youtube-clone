import { Outlet } from "react-router";
import Hearder from "../Components/Header";
import Navbar from "../Components/Navbar";

export default function Root() {
  return (
    <div>
      <Hearder />
      <Navbar />
      <Outlet />
    </div>
  );
}
