import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.react";
import TableData from "./components/TableData.react";
import Nominations from "./components/Nominations.react";
import { Paper, Typography } from "@material-ui/core";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [nominationData, setNominationData] = useState([]);
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
      <div className="headerContainer">
        <Paper elevation={3} children={searchContent} />
      </div>
      <div className="bodyContainer">
        <div className="tableContainer">
          <Paper
            elevation={3}
            children={
              <TableData
                searchInput={searchInput}
                nominationData={nominationData}
                setNominationData={setNominationData}
              />
            }
          />
        </div>
        <div>
          <Nominations
            nominationData={nominationData}
            setNominationData={setNominationData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
