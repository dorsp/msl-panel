import { Avatar, Grid, Typography, Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserById } from "../../firebase/user";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await getUserById(params.userId);
      setUser(data);
    };

    getData();
  }, [params.userId]);
  return (
    <Grid>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        User
      </Typography>
      <Grid container component="main" spacing={4}>
        <Grid item md={5} xs={12}>
          <Paper
            sx={{ padding: 5, display: "flex", flexDirection: "row" }}
            elevation={5}
          >
            <Avatar
              sx={{ width: 100, height: 100, marginRight: 5 }}
              src={`https://picsum.photos/id/10/2500/1667`}
            />
            <Grid sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                {user ? `${user.firstName} ${user.lastName}` : "Loading..."}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ fontWeight: "600", color: "gray", marginRight: 1 }}
                >
                  Email:
                </Typography>
                <Typography>{user ? `${user.email}` : "Loading..."}</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ fontWeight: "600", color: "gray", marginRight: 1 }}
                >
                  Phone:
                </Typography>
                <Typography>{user ? `${user.phone}` : "Loading..."}</Typography>
              </Box>
            </Grid>
          </Paper>
        </Grid>

        <Grid item md={7} xs={12}>
          <Paper sx={{ height: "11.3rem", padding: 5 }} elevation={5}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "2.5rem",
              }}
            >
              {user ? `${user.role}` : "Loading..."}
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "light",
              }}
            >
              {/* {total} */}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default User;
