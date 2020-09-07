import React, { useCallback } from "react";
import { TextField } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  searchBar: {
    width: "70%",
    padding: 10,
  },
});

function SearchBar(props) {
  const searchInput = props.searchInput;
  const setSearchInput = props.setSearchInput;
  const classes = useStyles();

  const onSearch = useCallback(
    (event) => {
      setSearchInput(event.target.value);
    },
    [setSearchInput]
  );
  return (
    <div className={classes.searchBar}>
      <TextField
        id="outlined-basic"
        label="Search movie title (eg. Star Wars, Hello, Test, etc)"
        variant="outlined"
        fullWidth={true}
        value={searchInput}
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchBar;
