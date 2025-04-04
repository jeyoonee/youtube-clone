import { Outlet } from "react-router";
import Hearder from "../Components/Header";
import Navbar from "../Components/Navbar";

export default function Root() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col flex-1">
        <Hearder />
        <main className="mt-14 ml-20 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
