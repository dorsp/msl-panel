import { Grid, Typography, TextField, Box, Button } from "@mui/material";

import { useState } from "react";
import { locationCreate } from "../../firebase/location";
import { useNavigate } from "react-router-dom";

const CreateLocation = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");

  const submit = async () => {
    try {
      await locationCreate(name);
      return navigate("/locations");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid>
      <Typography fontWeight="bold" fontSize={25}>
        Add New Location
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "40rem",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="small"
        />
        <Button
          sx={{ marginY: "1rem", width: "fit-content" }}
          variant="contained"
          onClick={submit}
        >
          Submit
        </Button>
      </Box>
    </Grid>
  );
};

export default CreateLocation;
