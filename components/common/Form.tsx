import { Typography } from "@mui/material";
import styled from "styled-components";
import { Grid, Box } from "@mui/material";
import { device } from "utils/Breakpoint";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import BasicDatePicker from "./BasicDatePicker";
function Form({ formData }) {
  const [CertificationDate, setCertificateDate] = React.useState("");
  const [data, setData] = React.useState({
    CertificationStatus: "",
    Certification: "",
    CertificationDate: "",
    TokenIssuer: "",
    Classification: "",
    IOTSensor: "",
    GeoSattelite: "",
    DroneFootage: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: e.target.value,
      CertificationDate: CertificationDate,
    });
    formData(data);
    console.log(name, value, "date is ", data);
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
          xs: "0px  20px 20px 20px",
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
            row
            name="CertificationStatus"
            value={data.CertificationStatus}
            onChange={handleData}
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
        <Grid md={6} xs={12} item>
          <Label>Certification</Label>
        </Grid>
        <Grid md={6} item xs={12}>
          <FormControl fullWidth>
            <Select
              labelId="demo-customized-select-label"
              name="Certification"
              value={data.Certification}
              onChange={handleData}
              input={<BootstrapInput />}
              sx={{ backgroundColor: "white", color: "black" }}
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
        <Grid md={6} xs={12} item>
          <Label>Certificate Issued date</Label>
        </Grid>
        <Grid md={6} item xs={12}>
          <BasicDatePicker
            date={CertificationDate}
            setDate={setCertificateDate}
          />
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
        <Grid md={6} xs={12} item>
          <Label>Token Issuer</Label>
        </Grid>
        <Grid md={6} xs={12} item>
          <FormControl fullWidth>
            <Select
              labelId="demo-customized-select-label"
              name="TokenIssuer"
              value={data.TokenIssuer}
              onChange={handleData}
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
            name="Classification"
            row
            value={data.Classification}
            onChange={handleData}
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
        <Grid md={6} item xs={12}>
          <Label> Measurement</Label>
        </Grid>
        <Grid
          md={6}
          item
          xs={12}
          sx={{
            paddingRight: {
              xs: "20px",
            },
          }}
        >
          <LabelMedium>IoT Sensor</LabelMedium>
          <CustomTextField
            placeholder="Data XY"
            name="IOTSensor"
            value={data.IOTSensor}
            onChange={handleData}
          />
          <LabelMedium>Geosatellite</LabelMedium>
          <CustomTextField
            variant="outlined"
            placeholder="Location XY..."
            name="GeoSattelite"
            value={data.GeoSattelite}
            onChange={handleData}
          />
          <LabelMedium>Drone Footage</LabelMedium>
          <CustomTextField
            variant="outlined"
            placeholder="Data XY"
            name="DroneFootage"
            value={data.DroneFootage}
            onChange={handleData}
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
  ["@media (max-width:565px)"]: {
    gap: "20px",
  },
});
const Container = styled(Grid)({
  paddingTop: "42px",
  ["@media (max-width:565px)"]: {
    paddingTop: "20px",
  },
});
const RadioButtons2 = styled(RadioGroup)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: "128px",
  ["@media (max-width:565px)"]: {
    gap: "20px",
  },
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

const Label = styled.p`
  color: #0a8a97;
  font-size: 27px;
  font-weight: 600;
  font-family: Roboto;
  @media ${device.mobileL} {
    color: #0a8a97;
    font-size: 20px;
    font-weight: 600;
    font-family: Roboto;
  }
`;

const LabelMedium = styled(Typography)({
  color: "#344054",
  fontSize: "18px",
  fontWeight: "400",
  marginBottom: "6px",
  marginTop: "33px",
});

export default Form;
