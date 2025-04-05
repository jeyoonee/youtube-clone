import { useState } from "react";
import { useNavigate } from "react-router";
import { fetchVideosByKeyword } from "../api";
import { CiSearch } from "react-icons/ci";
import { HiPlus, HiMicrophone } from "react-icons/hi2";
import { SlBell } from "react-icons/sl";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const data = await fetchVideosByKeyword(text);
    // console.log(data.items);
    navigate(`search/${text}`);
  };

  return (
    <header className="flex fixed top-0 left-0 right-0 z-50 justify-between items-center px-4 bg-black h-14 w-full">
      <button className="flex bg-none rounded-full hover:bg-[#282828] w-10 h-10  justify-center items-center cursor-pointer mr-[18px] aspect-square ">
        <HiOutlineMenu className="text-white w-6 h-6 " />
      </button>
      <img
        src="/logo.png"
        alt="youtube logo"
        className="cursor-pointer h-5"
        onClick={() => navigate("/")}
      />

      <div className="flex items-center justify-center ml-10 w-full mr-4">
        <form
          onSubmit={handleSubmit}
          className="relative flex border rounded-full border-[#303030] h-10 mr-4 w-full min-w-[127px]"
        >
          <input
            type="search"
            placeholder="Search"
            value={text}
            onChange={handleChange}
            className="rounded-xl min-w-7 w-full placeholder:text-[#757575] pl-4 py-1 pr-0 focus:outline-none text-white"
          />
          <button className="absolute flex w-16 h-full right-0 rounded-r-full justify-center items-center bg-[#222222]  cursor-pointer ">
            <CiSearch className="text-white w-6 h-6" />
          </button>
        </form>

        <button className="bg-[#282828] rounded-full hover:bg-[#3D3D3D] w-10 h-10 text-center cursor-pointer aspect-square">
          <HiMicrophone className="text-white m-auto w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center justify-center min-w-[213px]">
        <button className="flex justify-center items-center bg-[#282828] hover:bg-[#3D3D3D] rounded-full text-white px-3 h-9 cursor-pointer  mr-2">
          <HiPlus className="w-6 h-6 mr-1" />
          <span className="text-[14px] font-medium"> Create</span>
        </button>
        <button className="flex justify-center items-center bg-none rounded-full hover:bg-[#282828] w-10 h-10 text-center cursor-pointer">
          <SlBell className="text-white w-5 h-5" />
        </button>
        <img
          src="/profile.jpg"
          alt="user profile image"
          className="w-8 h-8 rounded-full cursor-pointer mx-[14px]"
        />
      </div>
    </header>
  );
}
