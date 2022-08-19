import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { Grid, Box } from "@mui/material";

const SingleStep = ({
  title,
  icon,
  active,
}: {
  title: string;
  icon: string;
  active: boolean;
}) => (
  <Box
    bgcolor={active ? "#0a8a97" : "#58dbba"}
    flexDirection="row"
    display="flex"
    justifyContent="center"
    padding="16px 27px"
    borderRadius="5px"
    gap="13px"
    sx={{
      padding: {
        md: "16px 27px",
        xs: "10px 20px",
      },
      width: {
        xs: "100%",
        md: "auto",
      },
    }}
  >
    <Icon src={icon} />{" "}
    <Typography
      color="white"
      fontWeight="600px"
      lineHeight="32px"
      sx={{
        fontSize: {
          md: "26px",
          xs: "20px",
        },
      }}
    >
      {title}
    </Typography>
  </Box>
);

const ProgressSteps = () => (
  <Box
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    gap="15px"
    flexWrap="wrap"
    sx={{
      justifyContent: {
        xs: "center",
        md: "space-between",
      },
    }}
  >
    <SingleStep title="Project Data" icon="icons/barsIcon.png" active={false} />
    <SingleStep
      title="Further Information"
      icon="icons/iconInfo.png"
      active={false}
    />{" "}
    <SingleStep
      title="Project Impact"
      icon="icons/iconWheel.png"
      active={false}
    />{" "}
    <SingleStep title="Certification" icon="icons/iconDone.svg" active={true} />
  </Box>
);

const MainConainer = styled(Grid)({});
const Icon = styled.img`
  height: 38px;
  width: 38px;
`;
export default ProgressSteps;
