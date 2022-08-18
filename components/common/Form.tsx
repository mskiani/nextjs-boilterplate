import { Typography } from "@mui/material";
import styled from "styled-components";
import { Grid, Box, LinearProgress } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import BasicDatePicker from "./BasicDatePicker";
import TextField from "@mui/material/TextField";

function Form() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      borderRadius="30px"
      sx={{
        background: "rgba(88, 219, 186, 0.1)",
        padding: {
          md: "98px 73px",
        },
      }}
    >
      <Container container>
        <Grid md={6} item>
          <Label>Certification Status</Label>
        </Grid>
        <Grid md={6} item>
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
        </Grid>
      </Container>

      <Hr />
      <Container
        container
        sx={{
          paddingBottom: {
            md: "105px",
          },
        }}
      >
        <Grid md={6} item>
          <Label>Certification</Label>
        </Grid>
        <Grid md={6} item>
          <FormControl fullWidth>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
              sx={{ backgroundColor: "white" }}
              placeholder="Select a Certification"
            >
              <CustomMenu value={"Certified Emission Reduction (CER)"} selected>
                Certified Emission Reduction (CER)
              </CustomMenu>
              <CustomMenu value={"Verified Carbon Units (VCU) "}>
                Verified Carbon Units (VCU){" "}
              </CustomMenu>
            </Select>
          </FormControl>
        </Grid>
      </Container>

      <Hr />
      <Container
        container
        sx={{
          paddingBottom: {
            md: "350px",
          },
        }}
      >
        <Grid md={6} item>
          <Label>Certificate Issued date</Label>
        </Grid>
        <Grid md={6} item>
          <BasicDatePicker />
        </Grid>
      </Container>
      <Hr />
      <Container
        container
        sx={{
          paddingBottom: {
            md: "50px",
          },
        }}
      >
        <Grid md={6} item>
          <Label>Token Issuer</Label>
        </Grid>
        <Grid md={6} item>
          <FormControl fullWidth>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
              placeholder="Select a Token Issuer"
              sx={{ backgroundColor: "white" }}
            >
              <CustomMenu value={"GreenTrade Impact GmbH"} selected>
                GreenTrade Impact GmbH
              </CustomMenu>
            </Select>
          </FormControl>
        </Grid>
      </Container>

      <Hr />

      <Container container>
        <Grid md={6} item>
          <Label>Classification</Label>
        </Grid>
        <Grid md={6} item>
          <RadioButtons2
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
            row
          >
            <FormControlLabel
              sx={{ backgroundColor: "" }}
              value="Avoidance"
              control={<CustomRadio />}
              label="Avoidance"
            />
            <FormControlLabel
              value="Removal"
              control={<CustomRadio />}
              label="Removal"
            />
          </RadioButtons2>
        </Grid>
      </Container>

      <Hr />
      <Container container>
        <Grid md={6} item>
          <Label> Measurement</Label>
        </Grid>
        <Grid md={6} item>
          <LabelMedium>IoT Sensor</LabelMedium>
          <CustomTextField id="outlined-basic" placeholder="Data XY" />{" "}
          <LabelMedium>Geosatellite</LabelMedium>
          <CustomTextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Location XY..."
          />
          <LabelMedium>Drone Footage</LabelMedium>
          <CustomTextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Data XY"
          />
        </Grid>
      </Container>
    </Box>
  );
}

const CustomRadio = styled(Radio)({
  color: "#d4d4d4",
  "&.Mui-checked": {
    color: "#2adba7",
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: "3px",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #d0d5dd",
    fontSize: 16,
    padding: "10px 26px 10px 12px",

    "&:focus": {
      borderRadius: 4,
      border: "2px solid #009fa4",
    },
  },
}));
const RadioButtons = styled(RadioGroup)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "128px",
});
const Container = styled(Grid)({
  paddingTop: "42px",
});
const RadioButtons2 = styled(RadioGroup)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: "128px",
});
const CustomMenu = styled(MenuItem)({
  selected: {
    backgroundColor: "pink",
    color: "white",
    fontWeight: 600,
  },
});
const Hr = styled.hr`
  width: 100%;
  border-bottom: "1px solid #d9d9d9";
`;
const CustomTextField = styled.input`
  width: 100%;

  padding: 0px 0px 0px 14px;
  font-size: 16px;
  border: 1px solid #d0d5dd;
  height: 49px;
  border-radius: 6px;
  &:focus {
    border: 2px solid #009fa4;
    outline: none;
  }
`;

const Label = styled(Typography)({
  color: "#0a8a97",
  fontSize: "27px",
  fontWeight: "600",
});
const LabelMedium = styled(Typography)({
  color: "#344054",
  fontSize: "18px",
  fontWeight: "400",
  marginBottom: "6px",
  marginTop: "33px",
});
export default Form;
