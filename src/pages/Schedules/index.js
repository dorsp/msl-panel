import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { scheduleDelete } from "../../firebase/schedule";
import { ScheduleColumns } from "../../utils/table-columns";
import useLists from "../../hooks/useLists";

const columns = [
  ...ScheduleColumns,
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <Button
          color="error"
          onClick={async () => await scheduleDelete(params.row.id)}
        >
          Delete
        </Button>
      );
    },
  },
];

const Schedules = () => {
  const schedules = useLists("schedules");
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
          Schedules
        </Typography>
        <Link to="/create-schedule" style={{ textDecoration: "none" }}>
          <Button>New Schedule</Button>
        </Link>
      </Box>
      <div style={{ height: "70vh", width: "100%" }}>
        <DataGrid
          rows={schedules}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[50, 100]}
          //   checkboxSelection
        />
      </div>
    </Grid>
  );
};

export default Schedules;
