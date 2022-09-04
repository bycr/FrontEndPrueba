import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "axios";

const UserForm = () => {
  const [Tipe_document, setlisDoc] = React.useState("");

  //inputs
  const [document, setDocumen] = useState("");
  const [names, setNames] = useState("");
  const [surnames, setSurnames] = useState("");
  const [hobbie, setHobbies] = useState("");

  const handleChange = (event) => {
    setlisDoc(event.target.value);
  };

  const postData = async () => {
    const endpoint = "http://127.0.0.1:8000/user";
    const postData = {
      Tipe_document,
      document,
      names,
      surnames,
      hobbie,
    };
    //console.log(postData);
    await axios 
      .post(endpoint, postData)
      .then((res) => console.log("mando", res))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          width: 300,
          height: "auto",
          backgroundColor: "text.secondary",
          borderColor: "secondary.main",
          alignItems: "center",
          margin: "auto",
          mt: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <form>
          <FormControl sx={{ width: 200, m: 2, alignItems: "center" }}>
            <InputLabel id="demo-simple-select-label">
              Tipo documento
            </InputLabel>
            <Select
              sx={{ width: 200 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Tipe_document}
              label="Tipo documento"
              onChange={handleChange}
            >
              <MenuItem value={1}>Cedula de ciudadanía</MenuItem>
              <MenuItem value={2}>cedula de extranjería</MenuItem>
              <MenuItem value={3}>Pasaporte</MenuItem>
            </Select>

            <TextField
              sx={{ borderColor: "grey.500", m: 2, alignItems: "center" }}
              id="outlined-basic"
              label="Documento"
              variant="outlined"
              type="number"
              value={document}
              onChange={(e) => setDocumen(e.target.value)}
            />
            <TextField
              sx={{ borderColor: "grey.500", m: 2, alignItems: "center" }}
              id="outlined-basic"
              label="Nombres"
              variant="outlined"
              value={names}
              onChange={(e) => setNames(e.target.value)}
            />
            <TextField
              sx={{ borderColor: "grey.500", m: 2, alignItems: "center" }}
              id="outlined-basic"
              label="Apellidos"
              variant="outlined"
              value={surnames}
              onChange={(e) => setSurnames(e.target.value)}
            />
            <TextField
              sx={{ borderColor: "grey.500", m: 2, alignItems: "center" }}
              id="outlined-basic"
              label="Hobbie"
              variant="outlined"
              value={hobbie}
              onChange={(e) => setHobbies(e.target.value)}
            />
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="success" onClick={postData}>
                Guardar
              </Button>
            </Stack>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default UserForm;
