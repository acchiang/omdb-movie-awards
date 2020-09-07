import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.react";
import TableData from "./components/TableData.react";
import Nominations from "./components/Nominations.react";
import { Paper, Typography, Link } from "@material-ui/core";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [nominationData, setNominationData] = useState([]);
  const searchContent = (
    <div className="Search">
      <Typography variant="h3" component="h3">
        The Shoppies
      </Typography>
      <Typography color="textSecondary">Welcome!</Typography>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Typography color="textSecondary">
        Created by Allison Chiang:{" "}
        <Link href="https://github.com/acchiang/omdb-movie-awards">
          Source Repo
        </Link>{" "}
        || <Link href="https://github.com/acchiang">GitHub</Link> ||{" "}
        <Link href="https://linkedin.com/in/allison-chiang">LinkedIn</Link>
      </Typography>
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
