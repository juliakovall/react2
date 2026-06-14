import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Material UI Homework</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
