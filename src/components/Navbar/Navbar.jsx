import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CRUD USUARIOS
        </Typography>
        <Stack direction="row" spacing={2}>
            <Button color="inherit">Usuarios</Button>
            <Button color="inherit">Agregar usuarios</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
