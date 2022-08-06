import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { locationDelete } from "../../firebase/location";
import { LocationColumns } from "../../utils/table-columns";
import useLists from "../../hooks/useLists";

const columns = [
  ...LocationColumns,
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div>
          <Link
            to={`/location/${params.row.id}`}
            style={{ textDecoration: "none" }}
          >
            <Button color="primary">View</Button>
          </Link>
          <Button
            color="error"
            onClick={async () => await locationDelete(params.row.id)}
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];

const Locations = () => {
  const locations = useLists("locations");

  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography fontWeight="bold" fontSize={25}>
          Locations
        </Typography>
        <Link to="/create-location" style={{ textDecoration: "none" }}>
          <Button>New Location</Button>
        </Link>
      </Box>
      <div style={{ height: "70vh", width: "100%" }}>
        <DataGrid
          rows={locations}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[50, 100]}
          //   checkboxSelection
        />
      </div>
    </Grid>
  );
};

export default Locations;
