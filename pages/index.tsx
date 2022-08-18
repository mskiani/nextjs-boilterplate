import Layout from "components/common/Layout";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { Grid, Box, Button } from "@mui/material";
import ProgressBar from "components/common/ProgressBar";
import ProgressSteps from "components/common/ProgressSteps";
import Form from "components/common/Form";
import React from "react";
import Link from "next/link";

const MainConainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  overFlow: "hidden",
});

const IndexPage = () => {
  const [formData, setFormData] = React.useState({
    CertificationStatus: "",
    Certification: "",
    CertificationDate: "",
    TokenIssuer: "",
    Classification: "",
    IOTSensor: "",
    GeoSattelite: "",
    DroneFootage: "",
  });

  const [submit, setSubmit] = React.useState(false);
  const [progrssValue, setProgressValue] = React.useState(70);
  const [login, setLogin] = React.useState(true);

  const handleForm = () => {
    // const isNullish = Object.values(formData).every((value) => {
    //   if (value === null) {
    //     return true;
    //   }

    //   return false;
    // });
    // console.log(formData, "values are", isNullish);

    if (
      formData.DroneFootage &&
      formData.Certification &&
      formData.CertificationDate &&
      formData.CertificationStatus &&
      formData.Classification &&
      formData.GeoSattelite &&
      formData.IOTSensor &&
      formData.TokenIssuer
    ) {
      console.log("values are present");
      setSubmit(true);
      setProgressValue(100);
    } else {
      console.log("values not present");
      setSubmit(false);
    }
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <MainConainer
        sx={{
          padding: {
            md: "45px 95px 98px 95px",
            xs: "20px 30px",
          },
        }}
      >
        <Typography
          fontWeight="500px"
          sx={{
            fontSize: {
              xs: "25px",
              md: "50px",
            },
            textAlign: {
              xs: "center",
            },
          }}
        >
          Create Project NFT
        </Typography>

        <Box
          sx={{
            marginTop: {
              md: "60px",
              xs: "20px",
            },
          }}
        >
          <ProgressBar color="#ececec" value={progrssValue} hex="#22d6ac" />
        </Box>
        {!submit ? (
          <>
            {" "}
            <Box
              sx={{
                margin: {
                  md: "30px 0px",
                  xs: "30px 0px",
                },
              }}
            >
              <ProgressSteps />
            </Box>
            <Form formData={setFormData} />
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  md: "flex-end",
                  xs: "center",
                },
                marginTop: {
                  md: "60px",
                  xs: "40px",
                },
              }}
            >
              <GradientButton onClick={() => handleForm()}>
                <Typography color="white" fontSize="25px">
                  Create Project
                </Typography>
              </GradientButton>
            </Box>
          </>
        ) : (
          <Box
            justifyContent={"center"}
            display="flex"
            sx={{ marginTop: "30px" }}
          >
            <Link href="/">
              <GradientButton onClick={() => setSubmit(false)}>
                <Typography color="white" fontSize="25px">
                  Success Go Back
                </Typography>
              </GradientButton>
            </Link>
          </Box>
        )}
      </MainConainer>
    </Layout>
  );
};

const GradientButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  outline: none;
  color: white;
  border: 0px;
  border-radius: 8px;
  max-width: 350px;
  width: 350px;
  background: linear-gradient(269.27deg, #2adba7 13.15%, #0a8a97 95.52%);

  padding: 10px 30px;
  margin: 0px;
`;

export default IndexPage;
