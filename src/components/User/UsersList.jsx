import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const UsersList = () => {
  const [documents, setlisDoc] = useState([]);

  const [users, setlisUsers] = useState([]);
  //useEffect = componentDidMount

  useEffect(() => {
    const obtenerDocuments = async () => {
      const url = "http://127.0.0.1:8000/document";
      const resul = await axios.get(url);
      //console.log(resul.data);
      setlisDoc(resul.data);
    };
    obtenerDocuments();
  }, []);

  useEffect(() => {
    const obtenerUsers = async () => {
      const url = "http://127.0.0.1:8000/user";
      const result = await axios.get(url);
      //console.log(resul.data);
      setlisUsers(result.data);
    };
    obtenerUsers();
  }, []);

  console.log(users);

  console.log(documents);

  return (
    <>
      <h1>aqui</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Documento</TableCell>
              <TableCell>Tipo de documento</TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell>Apellidos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map ((row) => (  
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.document}</TableCell>
                <TableCell>{row.Tipe_document}</TableCell>
                <TableCell>{row.names}</TableCell>
                <TableCell>{row.surnames}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UsersList;
