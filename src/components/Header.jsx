import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";


export default function Header({ term, onChange, handleSearch }) {
  return (
    <>
      <div className="header">
        <Logo />
        <SearchBar term={term} onChange={onChange} handleSearch={handleSearch} />
      </div>
      <Outlet />
    </>
  );
}
