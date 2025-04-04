import { Outlet } from "react-router";
import Hearder from "../Components/Header";
import Navbar from "../Components/Navbar";

export default function Root() {
  return (
    <div className="flex bg-black">
      <Navbar />
      <div className="flex flex-col flex-1">
        <Hearder />
        <main className="mt-14 ml-18 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
