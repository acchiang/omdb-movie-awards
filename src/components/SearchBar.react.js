import React, { useCallback } from "react";
import "./SearchBar.css";
import { TextField } from "@material-ui/core";

function SearchBar(props) {
  const searchInput = props.searchInput;
  const setSearchInput = props.setSearchInput;
  const onSearch = useCallback(
    (event) => {
      setSearchInput(event.target.value);
      //todo other actions
    },
    [setSearchInput]
  );
  return (
    <div id="search-bar">
      <TextField
        id="outlined-basic"
        label="Search movie title"
        variant="outlined"
        fullWidth={true}
        value={searchInput}
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchBar;
