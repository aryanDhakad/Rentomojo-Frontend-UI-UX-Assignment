import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Posts() {
  const columns = ["Post Title", "Post Link"];
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [searched, setSearched] = useState("");
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      let data = await response.json();
      data = data.filter((post) => post.userId === parseInt(id));
      setApiData(data);
      setFullData(data);
      setLoading(false);
    }

    getData();
  }, []);

  const handleSearch = (e) => {
    setSearched(e.target.value);

    if (e.target.value !== "") {
      const newData = () => {
        return fullData.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        });
      };
      setApiData(newData());
    } else {
      setApiData(fullData);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={searched}
          label="Search"
          variant="standard"
          onChange={handleSearch}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={column} align={index ? "right" : "left"}>
                  {column}
                </TableCell>
              ))}
              {/* <TableCell>Name</TableCell>
               <TableCell align="right">Company</TableCell>
              <TableCell align="right">Post Link</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {apiData.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">
                  <Link to={`/post/${row.id}`}> View Post</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
