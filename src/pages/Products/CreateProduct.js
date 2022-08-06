import {
  Grid,
  Typography,
  TextField,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";

import { useState } from "react";
import { productCreate } from "../../firebase/product";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("LIONESSE");
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(2);

  const submit = async () => {
    try {
      await productCreate(name, brand, minPrice, maxPrice);
      return navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid>
      <Typography fontWeight="bold" fontSize={25}>
        Add New Product
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "40rem",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="small"
        />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Brand</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Brand"
            margin="normal"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            size="small"
          >
            <MenuItem value={"LIONESSE"}>Lionesse</MenuItem>
            <MenuItem value={"ORGANI"}>Origani</MenuItem>
            <MenuItem value={"ZERO GRAVITY"}>Zero Gravity</MenuItem>
            <MenuItem value={"RENOVAR"}>Renovar</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Min Price"
          variant="outlined"
          margin="normal"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          size="small"
        />

        <TextField
          id="outlined-basic"
          label="Max Price"
          variant="outlined"
          margin="normal"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          size="small"
        />
        <Button
          sx={{ marginY: "1rem", width: "fit-content" }}
          variant="contained"
          onClick={submit}
        >
          Submit
        </Button>
      </Box>
    </Grid>
  );
};

export default CreateProduct;
