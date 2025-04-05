import { Outlet, useLocation } from "react-router";
import Hearder from "../Components/Header";
import Navbar from "../Components/Navbar";

export default function Root() {
  const location = useLocation();
  const isDetailPage = /^\/[^/]+$/.test(location.pathname);

  return (
    <div className="flex bg-black">
      {!isDetailPage && <Navbar />}
      <div className="flex flex-col flex-1">
        <Hearder />
        <main className={`mt-14 ${!isDetailPage ? "ml-18" : ""}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
