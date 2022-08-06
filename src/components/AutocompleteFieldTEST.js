import {
  Autocomplete,
  listItemAvatarClasses,
  TextField,
  Button,
} from "@mui/material";
import useLists from "../hooks/useLists";
import { useEffect, useState } from "react";

const AutocompleteField = ({ handleClick, name, ...rest }) => {
  const list = useLists(name);
  const [optionPicked, setOptionPicked] = useState(null);
  const submit = async () => {
    console.log(optionPicked);
  };
  return (
    <div>
      <Autocomplete
        {...rest}
        disablePortal
        id="combo-box-demo"
        options={list}
        getOptionLabel={(list) => list.firstName + " " + list.lastName}
        value={optionPicked}
        onChange={(_event, value) => {
          setOptionPicked(value);
        }}
        // sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            id="outlined-basic"
            variant="outlined"
            margin="normal"
            size="small"
          />
        )}
      />
      <Button onClick={(event) => handleClick(optionPicked)}>Submit</Button>
    </div>
  );
};

export default AutocompleteField;
