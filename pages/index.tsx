import Link from "next/link";
import Layout from "components/common/Layout";
import Greeting from "components/home/Greeting";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { Grid, Box, LinearProgress } from "@mui/material";
import ProgressBar from "components/common/ProgressBar";
import ProgressSteps from "components/common/ProgressSteps";
import Form from "components/common/Form";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <MainConainer
      sx={{
        padding: {
          md: "45px 95px 98px 95px",
        },
      }}
    >
      <Typography fontSize="50px" fontWeight="500px">
        Create Project NFT
      </Typography>

      <Box
        sx={{
          marginTop: {
            md: "60px",
          },
        }}
      >
        <ProgressBar color="#ececec" value={70} hex="#22d6ac" />
      </Box>
      <Box
        sx={{
          margin: {
            md: "30px 0px",
          },
        }}
      >
        <ProgressSteps />
      </Box>
      <Box>
        <Form />
      </Box>
    </MainConainer>
  </Layout>
);

const MainConainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  overFlow: "hidden",
});

export default IndexPage;
