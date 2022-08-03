import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Container from "@mui/material/Container";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

export default function BasicTable() {
  const [categories, setCategories] = useState<any>([]);

  React.useEffect(() => {
    axios.get("http://localhost:3001/category").then((res) => {
      setCategories(res.data.data);
    });
  }, []);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">CATEGORY</TableCell>
              <TableCell align="left">COLOR</TableCell>
              <TableCell align="left">EDIT</TableCell>
              <TableCell align="left">DELETE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category: any) => (
              <TableRow
                key={category.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{category.id}</TableCell>
                <TableCell align="left">{category.name}</TableCell>
                <TableCell align="left">{category.color}</TableCell>
                <TableCell align="left" color="blue">
                  <IconButton aria-label="fingerprint" color="primary">
                    <Fingerprint />
                  </IconButton>
                </TableCell>
                <TableCell align="left" color="red">
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      axios.delete("http://localhost:3001/category", {
                        data: category,
                      });
                    }}
                  ></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
