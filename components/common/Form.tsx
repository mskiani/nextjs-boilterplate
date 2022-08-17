import { Typography } from "@mui/material";
import styled from "styled-components";
import { Grid, Box, LinearProgress } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Label = ({ title }: { title: string }) => (
  <Typography color="#0a8a97" fontSize="27px" fontWeight="600px">
    {title}
  </Typography>
);
function Form() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        background: "rgba(88, 219, 186, 0.1)",
        padding: {
          md: "98px 73px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Label title="Certification Status" />
        <RadioButtons
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Yes"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            sx={{ backgroundColor: "" }}
            value="Yes"
            control={<CustomRadio />}
            label="Yes"
          />
          <FormControlLabel
            value="Pending"
            control={<CustomRadio />}
            label="Pending"
          />
          <FormControlLabel value="No" control={<CustomRadio />} label="No" />
        </RadioButtons>
      </Box>
      <Hr />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Label title="Certification " />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

const CustomRadio = styled(Radio)({
  color: "#d4d4d4",
  "&.Mui-checked": {
    color: "#2adba7",
  },
});

const RadioButtons = styled(RadioGroup)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "128px",
});
const Hr = styled.hr`
  width: 100%;
  border-bottom: "1px solid #d9d9d9";
`;

export default Form;
