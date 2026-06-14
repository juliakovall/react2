import { Box, Button, TextField } from "@mui/material";

function UserForm() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 4,
      }}
    >
      <TextField label="Name" />
      <TextField label="Email" />
      <Button variant="contained">Submit</Button>
    </Box>
  );
}

export default UserForm;
