import React, { useEffect, useMemo } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import "./TableData.css";

function TableData(props) {
  const searchInput = props.searchInput;
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

  function createData(row) {
    const { Title, Year } = row;
    const Nominate = (
      <Button
        variant="primary"
        onClick={() => {
          return;
        }}
      >
        Nominate
      </Button>
    );
    return { Title, Year, Nominate };
  }

  useEffect(() => {
    if (searchInput.length !== 0) {
      fetch(
        `http://www.omdbapi.com/?s=${searchInput}&type=movie&page=${page}&apikey=7faf4e64`,
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
    if (data != null) {
      data.forEach((row) => {
        rowsData.push(createData(row));
      });
    }
    return rowsData;
  }, [data]);

  return (
    <div id="tableContainer">
      <div id="paginator">
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
            disabled={data == null || data.length === 0}
          >
            Next
          </Button>
        </ButtonGroup>
      </div>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
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
