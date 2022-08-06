import {
  Grid,
  Typography,
  TextField,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";

import { useState } from "react";
import { userCreate } from "../../firebase/user";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const submit = async () => {
    try {
      await userCreate(firstName, lastName, phone, password, role, email);
      return navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid>
      <Typography fontWeight="bold" fontSize={25}>
        Create User
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
          label="First Name"
          variant="outlined"
          margin="dense"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          // sx={{ marginX: 3 }}
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          margin="dense"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          // sx={{ marginX: 3 }}
          size="small"
        />

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="dense"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // sx={{ marginX: 3 }}
          size="small"
        />

        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          margin="dense"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          // sx={{ marginX: 3 }}
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin="dense"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // sx={{ marginX: 3 }}
          type="password"
          size="small"
        />
        <FormControl>
          {/* <InputLabel id="demo-simple-select-disabled-label">Comapny Role</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            title="Company Role"
            margin="dense"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            size="small"
          >
            <MenuItem value={"OWNER"}>Owner</MenuItem>
            <MenuItem value={"MANAGER"}>Manager</MenuItem>
            <MenuItem value={"SALES PERSON"}>Sales Person</MenuItem>
            <MenuItem value={"SECRETARY"}>Secretary</MenuItem>
            <MenuItem value={"THERAPIST"}>Therapist</MenuItem>
            <MenuItem value={"CALL CENTER AGENT"}>Call Center Agent</MenuItem>
          </Select>
        </FormControl>
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

export default CreateUser;
