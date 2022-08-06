import { Avatar, Grid, Typography, Box, Paper, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getClientById, getClientMembership } from "../../firebase/client";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { ClientArrivalColumns } from "../../utils/table-columns";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import UpdateClientDialog from "./UpdateClientDialog";
import CreateMemberDialog from "./CreateMemberDialog";
import ClientArrivalDialog from "./ClientArrivalDialog";
import { getClientArrivals } from "../../firebase/arrival";

const Client = () => {
  const params = useParams();
  let navigate = useNavigate();
  const [arrivals, setArrivals] = useState([]);
  const [client, setUser] = useState(null);
  const [member, setMember] = useState(null);
  const [openCreateMemberDialog, setOpenCreateMemberDialog] = useState(false);
  const [openUpdateMemberDialog, setOpenUpdateMemberDialog] = useState(false);
  const [openClientArrivalDialog, setOpenClientArrivalDialog] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const data = await getClientById(params.clientId);
      setUser(data);
      if (data.memberId) {
        const memberData = await getClientMembership(data.memberId);
        setMember(memberData);
      }
    };
    const getRowsData = async () => {
      const data = await getClientArrivals(params.clientId);
      setArrivals(data);
    };
    getData();
    getRowsData();
  }, [params.clientId]);

  return (
    <Grid>
      <Grid container component="main" spacing={4}>
        <Grid item md={6} xs={12}>
          <Paper
            sx={{
              padding: 5,
              display: "flex",
              flex: 1,
              position: "relative",
              flexDirection: "row",
            }}
            elevation={5}
          >
            <Button
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                borderTop: 0,
                borderRight: 0,
              }}
              onClick={() => setOpenUpdateMemberDialog(true)}
            >
              Edit
            </Button>
            {client ? (
              <UpdateClientDialog
                open={openUpdateMemberDialog}
                onClose={() => setOpenUpdateMemberDialog(false)}
                clientId={params.clientId}
                client={client}
              ></UpdateClientDialog>
            ) : (
              "Loading..."
            )}
            <Avatar
              sx={{ width: 100, height: 100, marginRight: 5 }}
              src={`https://picsum.photos/id/10/2500/1667`}
            />
            <Grid sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                {client
                  ? `${client.firstName} ${client.lastName}`
                  : "Loading..."}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ fontWeight: "600", color: "gray", marginRight: 1 }}
                >
                  Email:
                </Typography>
                <Typography>
                  {client ? `${client.email}` : "Loading..."}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ fontWeight: "600", color: "gray", marginRight: 1 }}
                >
                  Phone:
                </Typography>
                <Typography>
                  {client ? `${client.phone}` : "Loading..."}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ fontWeight: "600", color: "gray", marginRight: 1 }}
                >
                  Address:
                </Typography>
                <Typography>
                  {client ? `${client.address}` : "Loading..."}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ fontWeight: "600", color: "gray", marginRight: 1 }}
                >
                  Age:
                </Typography>
                <Typography>
                  {client ? `${client.age}` : "Loading..."}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ fontWeight: "600", color: "gray", marginRight: 1 }}
                >
                  Sex:
                </Typography>
                <Typography>
                  {client ? `${client.sex}` : "Loading..."}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ fontWeight: "600", color: "gray", marginRight: 1 }}
                >
                  Rating:
                </Typography>
                <Typography>
                  <Rating
                    name="half-rating"
                    value={client ? parseInt(client.clientClass) : 0}
                    precision={0.5}
                    readOnly
                  />
                </Typography>
              </Box>
            </Grid>
          </Paper>
        </Grid>

        <Grid item md={6} xs={12}>
          <Paper sx={{ padding: 5 }} elevation={5}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "gray",
              }}
            >
              Membership
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "light",
              }}
            >
              {member ? `${member.membershipType}` : "Not Member"}
              {member ? (
                ""
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => setOpenCreateMemberDialog(true)}
                >
                  Add Membership
                </Button>
              )}
            </Typography>
            <CreateMemberDialog
              open={openCreateMemberDialog}
              onClose={() => setOpenCreateMemberDialog(false)}
              clientId={params.clientId}
            ></CreateMemberDialog>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Grid sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    margin: 3,
                    fontWeight: "normal",
                    marginBottom: -3,
                    marginTop: 0,
                  }}
                >
                  {member ? "Facials" : ""}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ margin: 5, fontWeight: "normal", marginBottom: 1 }}
                >
                  {member ? `${member.facials} ` : ""}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    marginTop: -4,
                    fontWeight: "normal",
                    marginBottom: 1,
                    marginLeft: 9,
                  }}
                >
                  {member ? `${member.facialCounter} ` + "USED" : ""}
                </Typography>
              </Grid>
              <Grid sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    margin: 3,
                    fontWeight: "normal",
                    marginBottom: -3,
                    marginTop: 0,
                  }}
                >
                  {member ? "Companions" : ""}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ margin: 5, fontWeight: "normal", marginBottom: 1 }}
                >
                  {member ? `${member.companions} ` : ""}
                </Typography>
              </Grid>
              <Grid sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    margin: 3,
                    fontWeight: "normal",
                    marginBottom: -3,
                    marginTop: 0,
                  }}
                >
                  {member ? "Slimming" : ""}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ margin: 5, fontWeight: "normal", marginBottom: 1 }}
                >
                  {member ? `${member.slimming} ` : ""}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    marginTop: -4,
                    fontWeight: "normal",
                    marginBottom: 1,
                    marginLeft: 9,
                  }}
                >
                  {member ? `${member.slimmingCounter} ` + "USED" : ""}
                </Typography>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Box style={{ height: "70vh", width: "100%", paddingTop: 10 }}>
        <Paper
          sx={{
            padding: 5,
            display: "flex",
            flex: 1,
            position: "relative",
            flexDirection: "row",
          }}
          elevation={5}
        >
          <Typography
            fontWeight="bold"
            fontSize={20}
            sx={{ position: "absolute", top: 5, left: 10 }}
          >
            Arrivals
          </Typography>
          <Button
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              borderTop: 0,
              borderRight: 0,
            }}
            onClick={() => setOpenClientArrivalDialog(true)}
          >
            Add Arrival
          </Button>
          {client ? (
            <ClientArrivalDialog
              open={openClientArrivalDialog}
              onClose={() => setOpenClientArrivalDialog(false)}
              clientId={params.clientId}
              client={client}
            >
              {" "}
            </ClientArrivalDialog>
          ) : (
            "Loading..."
          )}
          {arrivals ? (
            <DataGrid
              sx={{ minHeight: 300 }}
              rows={arrivals}
              columns={ClientArrivalColumns}
              pageSize={50}
              rowsPerPageOptions={[50, 100]}
              //   checkboxSelection
            />
          ) : (
            ""
          )}
        </Paper>
      </Box>
    </Grid>
  );
};

export default Client;
