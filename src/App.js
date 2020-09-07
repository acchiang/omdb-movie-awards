import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.react";
import TableData from "./components/TableData.react";
import { Paper, Typography } from "@material-ui/core";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const searchContent = (
    <div className="Search">
      <Typography variant="h3" component="h3">
        The Shoppies
      </Typography>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
  );

  return (
    <div className="App">
      <Paper elevation={3} children={searchContent} />
      <Paper elevation={3} children={<TableData searchInput={searchInput} />} />
    </div>
  );
}

export default App;
