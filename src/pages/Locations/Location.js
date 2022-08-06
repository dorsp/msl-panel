import {
  TextField,
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  Dialog,
  FormGroup,
  FormControlLabel,
  Switch,
  Checkbox,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { SalesColumns } from "../../utils/table-columns";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AutocompleteField from "../../components/AutocompleteField";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const params = useParams();
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [client, setClient] = useState();
  const [companions, setCompanions] = useState(0);
  const [countFacial, setCountFacial] = useState(false);
  const [countSlimming, setCountSlimming] = useState(false);
  /*
  useEffect(() => {
    const getData = async () => {
      const data = await getClientById(params.clientId);
      setUser(data);
      if (data.memberId) {
        const memberData = await getClientMembership(data.memberId);
        setMember(memberData);
      }
    };
    getData();
  }, [params.clientId]);

  */
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (option) => {
    handleClickOpen();
    setClient(option);
  };
  const submit = async () => {
    console.log(companions);
    console.log(countFacial);
    console.log(countSlimming);

    setOpen(false);
  };
  return (
    <Grid>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Client Info
      </Typography>
      <Grid container component="main" spacing={4}>
        <Grid item md={6} xs={12}>
          <AutocompleteField name="clients"></AutocompleteField>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {client
                ? ` ${client.firstName} ${client.lastName} `
                : "No Client Found"}
            </DialogTitle>
            <DialogContent>
              {client ? ` Please choose services  ` : ""}
              {client ? (
                <FormGroup>
                  <FormControlLabel
                    name="facial"
                    control={
                      <Checkbox
                        value={countFacial}
                        onChange={(e) => setCountFacial(e.target.checked)}
                      />
                    }
                    label="Facial"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => setCountSlimming(e.target.checked)}
                      />
                    }
                    label="Slimming"
                  />
                </FormGroup>
              ) : (
                ""
              )}
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
            </DialogContent>
            <DialogActions>
              <Button onClick={submit} autoFocus>
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>

      <Box style={{ height: "70vh", width: "100%", paddingTop: 10 }}>
        <Typography fontWeight="bold" fontSize={20}>
          Purchases
        </Typography>
        <DataGrid
          rows={[]}
          columns={SalesColumns}
          pageSize={50}
          rowsPerPageOptions={[50, 100]}
          //   checkboxSelection
        />
      </Box>
    </Grid>
  );
};

export default Location;
