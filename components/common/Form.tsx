import Link from "next/link";
import Layout from "components/common/Layout";
import Greeting from "components/home/Greeting";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { Grid, Box, LinearProgress } from "@mui/material";
import ProgressBar from "components/common/ProgressBar";
import ProgressSteps from "components/common/ProgressSteps";

const Form = () => (
  <Box
    sx={{
      background: "rgba(88, 219, 186, 0.1)",
      padding: {
        md: "98px 73px",
      },
    }}
  >
    hrllo
  </Box>
);

const MainConainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  overFlow: "hidden",
});

export default Form;
