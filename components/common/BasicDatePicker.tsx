import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
export default function BasicDatePicker({
  date,
  setDate,
}: {
  date: any;
  setDate: any;
}) {
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
        value={date}
        onChange={setDate}
        renderInput={(params) => <BootstrapInput {...params} />}
      />
    </LocalizationProvider>
  );
}
