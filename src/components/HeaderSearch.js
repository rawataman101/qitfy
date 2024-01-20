import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./HeaderSearch.css";
function HeaderSearch() {
  return (
    <div className="headerSearch">
      <input type="text" placeholder="Search a album of your choice" />
      <SearchIcon />
    </div>
  );
}

export default HeaderSearch;
