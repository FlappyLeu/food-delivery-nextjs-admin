import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Container from "@mui/material/Container";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Edit from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Add, FoodBank } from "@mui/icons-material";

export default function userTable() {
  const [user, setUser] = useState<any>([]);

  React.useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => {
      setUser(res.data.data);
    });
  }, []);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">USER ID</TableCell>
              <TableCell align="left">PHONE NUMBER</TableCell>
              <TableCell align="left">ADDRESS</TableCell>
              <TableCell align="left">FIRST NAME</TableCell>
              <TableCell align="left">AGE</TableCell>
              <TableCell align="left">REGISTER</TableCell>
              <TableCell align="left">ROLE ID</TableCell>
              <TableCell align="left">EDIT USER</TableCell>
              <TableCell align="left">DELETE USER</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((category: any) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{user.id}</TableCell>
                <TableCell align="left">{user.phoneNumber}</TableCell>
                <TableCell align="left">{user.address}</TableCell>
                <TableCell align="left">{user.firstName}</TableCell>
                <TableCell align="left">{user.age}</TableCell>
                <TableCell align="left">{user.register}</TableCell>
                <TableCell align="left">{user.roleId}</TableCell>
                <TableCell align="left" color="blue">
                  <IconButton aria-label="edit" color="primary">
                    <Edit />
                  </IconButton>
                </TableCell>
                <TableCell align="left" color="red">
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      axios.delete("http://localhost:3001/delete-user", {
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
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        color="primary"
        onClick={() => {
          axios.post("http://localhost:3001/add-user", {
            data: Add,
          });
        }}
      >
        Add user
      </Button>
    </Container>
  );
}
