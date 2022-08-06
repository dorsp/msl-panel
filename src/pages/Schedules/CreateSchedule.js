import {
  Grid,
  Typography,
  Box,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

import { useState } from "react";
import { scheduleCreate } from "../../firebase/schedule";
import { useNavigate } from "react-router-dom";
import AutocompleteField from "../../components/AutocompleteField";

const CreateSchedule = () => {
  let navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [client, setClient] = useState("");
  const [facial, setFacial] = useState(false);
  const [rf, setRf] = useState(false);
  const [cocoon, setCocoon] = useState(false);
  const [ems, setEms] = useState(false);

  const submit = async () => {
    try {
      await scheduleCreate(location, client, facial, rf, cocoon, ems);
      return navigate("/schedules");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(ems);
  return (
    <Grid>
      <Typography fontWeight="bold" fontSize={25}>
        Add New Client Schedule
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "40rem",
        }}
      >
        <AutocompleteField
          name="clients"
          getOptionLabel={(option) => option.firstName + " " + option.lastName}
          onInputChange={(e) => setClient(e.target.innerText)}
        />
        <AutocompleteField
          name="locations"
          getOptionLabel={(option) => option.name}
          onInputChange={(e) => setLocation(e.target.innerText)}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value={facial}
                onChange={(e) => setFacial(e.target.checked)}
              />
            }
            label="Facial"
          />
          <FormControlLabel
            control={
              <Checkbox value={rf} onChange={(e) => setRf(e.target.checked)} />
            }
            label="RF"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={cocoon}
                onChange={(e) => setCocoon(e.target.checked)}
              />
            }
            label="Cocoon"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={ems}
                onChange={(e) => setEms(e.target.checked)}
              />
            }
            label="EMS"
          />
        </FormGroup>
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

export default CreateSchedule;
