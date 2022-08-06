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
import { arrivalCreate, incrementFacialCounter } from "../../firebase/arrival";
import AutocompleteField from "../../components/AutocompleteField";

const ClientArrivalDialog = ({ open, onClose, clientId, client }) => {
  const [facialUsed, setFacialUsed] = useState(0);
  const [slimmingUsed, setSlimmingUsed] = useState(0);
  const [companions, setCompanions] = useState(0);
  const [locationName, setLocationName] = useState([]);
  const [scheduleBy, setScheduleBy] = useState([]);
  const [assistedBy, setAssistedBy] = useState([]);
  const fullName = client.firstName + " " + client.lastName;

  const handleInput = (value, label) => {
    switch (label) {
      case "Scheduled By":
        setScheduleBy(value[0].firstName + " " + value[0].lastName);
        break;
      case "Assisted By":
        setAssistedBy(
          value.map((value) => value.firstName + " " + value.lastName)
        );
        break;
      case "Location Name":
        setLocationName(value[0].name);
        break;
    }
  };

  const submit = async () => {
    try {
      await arrivalCreate(
        clientId,
        client.memberId,
        fullName,
        parseInt(facialUsed),
        parseInt(slimmingUsed),
        parseInt(companions),
        locationName,
        scheduleBy,
        assistedBy
      );
      await incrementFacialCounter(
        client.memberId,
        parseInt(facialUsed),
        parseInt(slimmingUsed)
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
            label="Facials Used"
            variant="outlined"
            margin="dense"
            value={facialUsed}
            type="number"
            onChange={(e) => setFacialUsed(e.target.value)}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Slimming Used"
            variant="outlined"
            margin="dense"
            value={slimmingUsed}
            type="number"
            onChange={(e) => setSlimmingUsed(e.target.value)}
            // sx={{ marginX: 3 }}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Companions Arrived"
            variant="outlined"
            margin="dense"
            value={companions}
            type="number"
            onChange={(e) => setCompanions(e.target.value)}
            // sx={{ marginX: 3 }}
            size="small"
          />
          <AutocompleteField
            name="users"
            handleInput={handleInput}
            label="Scheduled By"
          />
          <AutocompleteField
            name="users"
            handleInput={handleInput}
            label="Assisted By"
          />
          <AutocompleteField
            name="locations"
            handleInput={handleInput}
            label="Location Name"
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
      title="Add Client Arrival"
      content={getContent()}
    ></DialogWrapper>
  );
};

export default ClientArrivalDialog;
