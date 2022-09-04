import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CRUD USUARIOS
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">
            <Link className="nav-link" to="/">
              Usuarios
            </Link>
          </Button>
          <Button color="inherit">
            <Link className="nav-link" to="/UserForm">
              Agregar usuarios
            </Link>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
