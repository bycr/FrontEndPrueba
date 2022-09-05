import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import UserForm from "./UserForm";

const UsersList = () => {
  //id para actualizar

  let navigate = useNavigate();
  const [documents, setlisDoc] = useState([]);

  const [users, setlisUsers] = useState([]);
  //useEffect = componentDidMount

  useEffect(() => {
    const obtenerDocuments = async () => {
      const url = "http://127.0.0.1:8000/document";
      await axios
        .get(url)
        .then((resul) => setlisDoc(resul.data))
        .catch((err) => console.log(err));
      //console.log(resul.data);
    };
    obtenerDocuments();
  }, []);

  //console.log(documents);

  useEffect(() => {
    const obtenerUsers = async () => {
      const url = "http://127.0.0.1:8000/user";
      const result = await axios.get(url);
      //console.log(resul.data);
      setlisUsers(result.data);
    };
    obtenerUsers();
  }, []);

  const postDelete = async (id, e) => {
    e.preventDefault();
    const endpoint = `http://127.0.0.1:8000/user/${id}`;
    //console.log(postData);
    await axios
      .delete(endpoint)
      .then((res) => {
        if (res.status === 200) {
          console.log("eliminado");
        }
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = (id, document_, names, surnames, Tipe_document) => {
    localStorage.setItem('document',document_);
    localStorage.setItem('names',names);
    localStorage.setItem('surnames',surnames);
    localStorage.setItem('hobbie',surnames);
    localStorage.setItem('Tipe_document_id',Tipe_document);
    navigate(`/UserForm/${id}`)
  }

  //console.log(users);

  //console.log(documents);

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{
            mt: 2,
            ml: 2,
            mr: 2,
            justify: "center",
            minWidth: 620,
            backgroundColor: "text.secondary",
            borderColor: "secondary.main",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h6">Documento</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Tipo de documento</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Nombres</Typography>{" "}
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Apellidos</Typography>{" "}
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.document}</TableCell>
                <TableCell align="center">{row.Tipe_document}</TableCell>
                <TableCell align="center">{row.names}</TableCell>
                <TableCell align="center">{row.surnames}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={(e) => postDelete(row.userId, e)}
                  >
                    Eliminar
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() =>
                      handleEdit(
                        row.userId,
                        row.document,
                        row.names,
                        row.surnames,
                        row.Tipe_document
                      )
                    }
                  >
                    Actualizar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UsersList;
