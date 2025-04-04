import { NavLink } from "react-router";
import { MdHome, MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaCircleUser } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="fixed top-14 left-0 h-full bg-black border-r border-[#303030] px-1">
      <NavLink
        to="/"
        className="flex flex-col items-center justify-between text-white pt-4 pb-[14px] text-[10px] w-16 h-[74px] hover:bg-[#282827] rounded-xl"
      >
        <MdHome className="w-6 h-6" />
        <span>Home</span>
      </NavLink>
      <NavLink className="flex flex-col items-center justify-between text-white pt-4 pb-[14px] text-[10px] w-16 h-[74px] hover:bg-[#282827] rounded-xl">
        <SiYoutubeshorts className="w-6 h-6" />
        <span>Shorts</span>
      </NavLink>
      <NavLink className="flex flex-col items-center justify-between text-white pt-4 pb-[14px] text-[10px] w-16 h-[74px] hover:bg-[#282827] rounded-xl">
        <MdSubscriptions className="w-6 h-6" />
        <span>Subscriptions</span>
      </NavLink>
      <NavLink className="flex flex-col items-center justify-between text-white pt-4 pb-[14px] text-[10px] w-16 h-[74px] hover:bg-[#282827] rounded-xl">
        <FaCircleUser className="w-6 h-6" />
        <span>You</span>
      </NavLink>
    </nav>
  );
}
