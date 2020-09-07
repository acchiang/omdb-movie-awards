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
      <div className="paperContainer">
        <Paper elevation={3} children={searchContent} />
      </div>
      <div className="paperContainer">
        <div className="tableContainer">
          <Paper
            elevation={3}
            children={<TableData searchInput={searchInput} />}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
