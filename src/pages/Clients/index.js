import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ClientColumns } from "../../utils/table-columns";
import { clientDelete } from "../../firebase/client";
import useLists from "../../hooks/useLists";

const columns = [
  ...ClientColumns,
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div>
          <Link
            to={`/client/${params.row.id}`}
            style={{ textDecoration: "none" }}
          >
            <Button color="primary">View</Button>
          </Link>
          <Button
            color="error"
            onClick={async () =>
              await clientDelete(params.row.id, params.row.memberId)
            }
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];

const Clients = () => {
  const clients = useLists("clients");

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
          Clients
        </Typography>
        <Link to="/create-client" style={{ textDecoration: "none" }}>
          <Button>New Clients</Button>
        </Link>
      </Box>
      <div style={{ height: "70vh", width: "100%" }}>
        <DataGrid
          rows={clients}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[50, 100]}
          // checkboxSelection
        />
      </div>
    </Grid>
  );
};

export default Clients;
