import { Autocomplete, TextField, Chip } from "@mui/material";
import { useState } from "react";
import useLists from "../hooks/useLists";

const AutocompleteField = ({ name, label, handleInput, ...rest }) => {
  const list = useLists(name);

  const [optionPicked, setOptionPicked] = useState([]);

  const checklist = (name) => {
    switch (name) {
      case "locations":
        return (list) => list.name;
      case "users":
        return (list) => list.firstName + " " + list.lastName;
    }
  };

  return (
    <Autocomplete
      {...rest}
      disablePortal
      multiple
      id="tags-outlined"
      options={list}
      getOptionLabel={checklist(name)}
      value={optionPicked}
      onChange={(_event, value) => {
        setOptionPicked(value);
        handleInput(value, label);
      }}
      // sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          id="outlined-basic"
          variant="outlined"
          margin="normal"
          size="small"
        />
      )}
    />
  );
};

export default AutocompleteField;
