import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/searched">검색 결과</NavLink>
    </nav>
  );
}
