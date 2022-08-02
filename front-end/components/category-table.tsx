import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Container from "@mui/material/Container";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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
                  <Button variant="contained" color="primary">
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="left" color="red">
                  <Button variant="contained" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
