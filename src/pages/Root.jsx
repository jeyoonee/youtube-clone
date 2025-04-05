import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Root() {
  const location = useLocation();
  const isDetailPage = /^\/[^/]+$/.test(location.pathname);

  return (
    <div className="flex bg-black">
      {!isDetailPage && <Navbar />}
      <div className="flex flex-col flex-1">
        <Header />
        <main className={`mt-14 ${!isDetailPage ? "ml-18" : ""}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
