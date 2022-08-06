import Grid from "@mui/material/Grid";
import HeaderCard from "../components/HeaderCard";
import { DataGrid } from "@mui/x-data-grid";
import { SalesColumns } from "../utils/table-columns";
import { Box, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid>
      <Grid container component="main" spacing={6}>
        <HeaderCard title="users" />
        <HeaderCard title="clients" />
        <HeaderCard title="products" />
        <HeaderCard title="locations" />
      </Grid>
      <Box style={{ height: "70vh", width: "100%", paddingTop: 10 }}>
        <Typography fontWeight="bold" fontSize={20}>
          Sales
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

export default Dashboard;
