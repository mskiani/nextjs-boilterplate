import Layout from "components/common/Layout";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { Grid, Box, Button } from "@mui/material";
import ProgressBar from "components/common/ProgressBar";
import ProgressSteps from "components/common/ProgressSteps";
import Form from "components/common/Form";

const IndexPage = () => (
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
        <ProgressBar color="#ececec" value={70} hex="#22d6ac" />
      </Box>
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
      <Form />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: {
            md: "60px",
          },
        }}
      >
        <GradientButton>
          {" "}
          <Typography color="white" fontSize="25px">
            Create Project
          </Typography>
        </GradientButton>
      </Box>
    </MainConainer>
  </Layout>
);

const MainConainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  overFlow: "hidden",
});

const GradientButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  outline: none;
  color: white;
  border: 0px;
  border-radius: 8px;
  background: linear-gradient(269.27deg, #2adba7 13.15%, #0a8a97 95.52%);

  padding: 10px 30px;
  margin: 0px;
`;

export default IndexPage;
