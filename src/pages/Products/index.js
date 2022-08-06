import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { productDelete } from "../../firebase/product";
import { ProductColumns } from "../../utils/table-columns";
import useLists from "../../hooks/useLists";

const columns = [
  ...ProductColumns,
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <Button
          color="error"
          onClick={async () => await productDelete(params.row.id)}
        >
          Delete
        </Button>
      );
    },
  },
];

const Products = () => {
  const products = useLists("products");
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
          Products
        </Typography>
        <Link to="/create-product" style={{ textDecoration: "none" }}>
          <Button>New Product</Button>
        </Link>
      </Box>
      <div style={{ height: "70vh", width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[50, 100]}
          //   checkboxSelection
        />
      </div>
    </Grid>
  );
};

export default Products;
