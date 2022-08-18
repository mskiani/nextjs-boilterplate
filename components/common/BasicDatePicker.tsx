import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputBase from "@mui/material/InputBase";
import styled from "styled-components";
export default function BasicDatePicker() {
  const [value, setValue] = React.useState<Date | null>(null);

  const BootstrapInput = styled(TextField)(({ theme }) => ({
    "label + &": {
      marginTop: "3px",
    },
    backgroundColor: "white",
    borderRadius: 4,
    border: "1px solid #009fa4",
    outline: "none",
    width: "100%",
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",

      fontSize: 16,
      padding: "10px 26px 10px 12px",

      "&:focus": {
        borderRadius: 4,
        border: "1px solid #009fa4",
        outline: "none",
      },
    },
  }));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <BootstrapInput outline="none" {...params} />}
      />
    </LocalizationProvider>
  );
}
