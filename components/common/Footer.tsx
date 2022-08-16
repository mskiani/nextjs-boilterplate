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
    <Grid
      sx={{
        position: "fixed",
        width: "100%",
        bottom: "0px",
        backgroundSize: "cover",
        height: "600px",

        backgroundImage:
          " linear-gradient(to left, rgba(42, 219, 167, 0.8), rgba(10, 138, 151, .9)),url('images/loj.png')",
      }}
    ></Grid>
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
