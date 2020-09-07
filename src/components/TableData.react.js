import React, { useEffect, useMemo } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  tableContainer: {
    width: "95%",
    padding: 10,
  },

  paginator: {
    margin: 10,
  },
});

function TableData(props) {
  const { searchInput, nominationData, setNominationData } = props;
  const classes = useStyles();
  const [data, setData] = React.useState();
  const [page, setPage] = React.useState(1);

  const columns = [
    { id: "Title", label: "Title", minWidth: 250 },
    { id: "Year", label: "Year", minWidth: 50 },
    {
      id: "Nominate",
      label: "Nominate",
      minWidth: 50,
    },
  ];

  useEffect(() => {
    if (searchInput.length !== 0) {
      fetch(
        `https://www.omdbapi.com/?s=${searchInput}&type=movie&page=${page}&apikey=7faf4e64`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((res) => setData(res.Search))
        .catch((error) => console.log(error));
    }
  }, [page, searchInput]);

  const rows = useMemo(() => {
    let rowsData = [];
    const createData = (row) => {
      const { Title, Year } = row;
      const Nominate = (
        <Button
          onClick={() => {
            let isNewNomination = true;
            nominationData.forEach((item, index) => {
              if (item.Title === Title && isNewNomination) {
                window.alert("You already nominated this movie!");
                isNewNomination = false;
                return;
              }
            });
            if (isNewNomination) {
              if (nominationData.length >= 5) {
                window.alert(
                  "You can only nominate up to 5 movies. Remove one to add another."
                );
              } else {
                setNominationData([...nominationData, { Title, Year }]);
              }
            }
          }}
        >
          Nominate
        </Button>
      );
      return { Title, Year, Nominate };
    };

    if (data != null) {
      data.forEach((row) => {
        rowsData.push(createData(row, setNominationData));
      });
    }
    return rowsData;
  }, [data, nominationData, setNominationData]);

  const emptyView = useMemo(() => {
    if (rows.length === 0) {
      return (
        <Typography color="textSecondary">
          Oops, no results (yet)! Try searching something more specific.{" "}
        </Typography>
      );
    }
  }, [rows.length]);

  return (
    <div className={classes.tableContainer}>
      <div className={classes.paginator}>
        <ButtonGroup variant="contained">
          <Button
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Prev
          </Button>
          <Button
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={data == null || data.length < 10}
          >
            Next
          </Button>
        </ButtonGroup>
      </div>
      {emptyView}
      <TableContainer>
        <Table stickyHeader size="small" aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableData;
