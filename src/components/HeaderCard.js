import { Typography, Paper, Grid } from "@mui/material";
import { capitalizeFirst } from "../utils/helper";
import { useState, useEffect } from "react";
import { getTotal } from "../firebase/all";
const HeaderCard = ({ title }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTotal(title);
        setTotal(data);
      } catch (error) {
        alert(error.message);
      }
    };
    getData();
  }, []);
  return (
    <Grid item md={3} xs={12}>
      <Paper sx={{ height: "10rem", padding: 5 }} elevation={5}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "gray",
          }}
        >
          Total {capitalizeFirst(title)}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "light",
          }}
        >
          {total}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default HeaderCard;
