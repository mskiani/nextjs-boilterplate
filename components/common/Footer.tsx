import { Button, Grid, Typography, Box } from "@mui/material";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import { url } from "inspector";

export const Footer = () => {
  const Menu = [
    {
      title: "Home",
      link: "/index",
    },
    {
      title: "Marketplace",
      link: "#",
    },
    {
      title: "Launchpad",
      link: "#",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "pink",
        height: "500px",
        position: "fixed",
        width: "80%",
        bottom: "0px",
      }}
    >
      <Grid
        sx={{
          height: "300px",
          backgroundImage:
            " linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),url('images/lol2.png')",
        }}
      ></Grid>
    </Box>
  );
};

const GradientText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  background: -webkit-linear-gradient(90deg, #0a8a97, #2adba7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 10px 30px;
  margin: 0px;
`;
const StyleSubHeading = styled(Typography)({
  fontSize: "20px",
  fontWeight: "normal",
  lineHeight: "1.5",
  color: "#667085",
  textalign: "left",
  fontFamily: "Inter",
  ["@media (max-width:600px)"]: {
    fontSize: "18px",
    lineHeight: "1.56",
  },
});
