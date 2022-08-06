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
import { clientCreate } from "../../firebase/client";
import { useNavigate } from "react-router-dom";

const CreateClient = () => {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [callCenter, setCallCenter] = useState("");
  const [clientClass, setClientClass] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const memberId = "";

  const submit = async () => {
    try {
      await clientCreate(
        firstName,
        lastName,
        email,
        parseInt(age),
        sex,
        callCenter,
        parseInt(clientClass),
        memberId,
        parseInt(phone),
        address
      );
      return navigate("/clients");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid>
      <Typography fontWeight="bold" fontSize={25}>
        Create Client
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
          label="Age"
          variant="outlined"
          margin="dense"
          value={age}
          type="number"
          onChange={(e) => setAge(e.target.value)}
          size="small"
        />
        <FormControl margin="dense">
          {/* <InputLabel id="demo-simple-select-disabled-label">Comapny Role</InputLabel> */}
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            title="Sex"
            margin="dense"
            label="Gender"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            size="small"
          >
            <MenuItem value={"MALE"}>Male</MenuItem>
            <MenuItem value={"FEMALE"}>Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl margin="dense">
          {/* <InputLabel id="demo-simple-select-disabled-label">Comapny Role</InputLabel> */}
          <InputLabel id="demo-simple-select-label">Call Center</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            margin="dense"
            label="Call Center"
            value={callCenter}
            onChange={(e) => setCallCenter(e.target.value)}
            size="small"
          >
            <MenuItem value={"NONE"}>None</MenuItem>
            <MenuItem value={"MSL"}>MSL</MenuItem>
            <MenuItem value={"LS"}>LS</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          margin="dense"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          size="small"
        />

        <FormControl fullWidth margin="dense">
          <InputLabel id="demo-simple-select-label">Client Class</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={clientClass}
            label="Client Class"
            size="small"
            onChange={(e) => setClientClass(e.target.value)}
          >
            <MenuItem value={"5"}>Excellent</MenuItem>
            <MenuItem value={"4"}>Very Potential</MenuItem>
            <MenuItem value={"3"}>Potential</MenuItem>
            <MenuItem value={"2"}>Poor</MenuItem>
            <MenuItem value={"1"}>Very Poor</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          margin="dense"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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

export default CreateClient;
