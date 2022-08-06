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
import { memberCreate } from "../../firebase/client";

const CreateMember = ({ clientId }) => {
  const [membershipType, setMembershipType] = useState("");
  const [facials, setFacials] = useState(0);
  const facialCounter = 0;
  const [slimming, setSlimming] = useState(0);
  const slimmingCounter = 0;
  const [companions, setCompanions] = useState(0);

  const submit = async () => {
    try {
      await memberCreate(
        clientId,
        membershipType,
        facials,
        facialCounter,
        slimming,
        slimmingCounter,
        companions
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid>
      <Typography component={"span"} fontWeight="bold" fontSize={25}>
        Create Member
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "40rem",
        }}
      >
        <FormControl fullWidth margin="dense">
          <InputLabel id="demo-simple-select-label">Membership Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={membershipType}
            label="Membership Type"
            size="small"
            onChange={(e) => setMembershipType(e.target.value)}
          >
            <MenuItem value={"PACKAGE"}>Package</MenuItem>
            <MenuItem value={"STANDART"}>Standart</MenuItem>
            <MenuItem value={"PREMIUM"}>Premium</MenuItem>
            <MenuItem value={"VIP"}>Vip</MenuItem>
            <MenuItem value={"ULTIMATE"}>Ultimate</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Facial Given"
          variant="outlined"
          margin="dense"
          value={facials}
          type="number"
          onChange={(e) => setFacials(e.target.value)}
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Slimming Given"
          variant="outlined"
          margin="dense"
          value={slimming}
          type="number"
          onChange={(e) => setSlimming(e.target.value)}
          // sx={{ marginX: 3 }}
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Companions"
          variant="outlined"
          margin="dense"
          value={companions}
          type="number"
          onChange={(e) => setCompanions(e.target.value)}
          // sx={{ marginX: 3 }}
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

export default CreateMember;
