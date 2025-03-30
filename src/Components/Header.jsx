import { useState } from "react";
import { useNavigate } from "react-router";
import { fetchVideosByKeyword } from "../api";

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
    <header className="flex justify-between">
      <div> 메뉴 </div>
      <div> 유튭 로고 </div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          value={text}
          onChange={handleChange}
        />
      </form>

      <div> 마이크 </div>
      <button> Create </button>
      <div> 종 </div>
      <div> 프사 </div>
    </header>
  );
}
