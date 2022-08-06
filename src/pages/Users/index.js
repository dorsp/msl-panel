import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { userDelete } from "../../firebase/user";
import { UserColumns } from "../../utils/table-columns";
import useLists from "../../hooks/useLists";
const columns = [
  ...UserColumns,
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div>
          <Link
            to={`/user/${params.row.id}`}
            style={{ textDecoration: "none" }}
          >
            <Button color="primary">View</Button>
          </Link>
          <Button
            color="error"
            onClick={async () => await userDelete(params.row.id)}
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];

const Users = () => {
  const users = useLists("users");

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
          Users
        </Typography>
        <Link to="/create-user" style={{ textDecoration: "none" }}>
          <Button>New User</Button>
        </Link>
      </Box>
      <div style={{ height: "70vh", width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[50, 100]}
        />
      </div>
    </Grid>
  );
};

export default Users;
