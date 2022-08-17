import { Typography } from "@mui/material";
import styled from "styled-components";
import { Grid, Box, LinearProgress } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Label = ({ title }: { title: string }) => (
  <Typography color="#0a8a97" fontSize="27px" fontWeight="600px">
    {title}
  </Typography>
);
const Form = () => (
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
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Label title="Certification" />
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
    </FormControl>
  </Box>
);

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

export default Form;
