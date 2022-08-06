import React from "react";
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
import DialogWrapper from "../../components/Dialog";
import { clientUpdate } from "../../firebase/client";

const UpdateClientDialog = ({ open, onClose, clientId, client }) => {
  const [firstName, setFirstName] = useState(client.firstName);
  const [lastName, setLastName] = useState(client.lastName);
  const [email, setEmail] = useState(client.email);
  const [age, setAge] = useState(client.age);
  const [sex, setSex] = useState(client.sex);
  const [callCenter, setCallCenter] = useState(client.callCenter);
  const [clientClass, setClientClass] = useState(client.clientClass);
  const [phone, setPhone] = useState(client.phone);
  const [address, setAddress] = useState(client.address);

  const submit = async () => {
    try {
      await clientUpdate(
        clientId,
        firstName,
        lastName,
        email,
        parseInt(age),
        sex,
        callCenter,
        parseInt(clientClass),
        parseInt(phone),
        address
      );
    } catch (error) {
      console.log(error);
    }
    window.location.reload(false);
  };
  const getContent = () => {
    return (
      <Grid>
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

  return (
    <DialogWrapper
      open={open}
      onClose={onClose}
      title="Update Client Info"
      content={getContent()}
    ></DialogWrapper>
  );
};

export default UpdateClientDialog;
