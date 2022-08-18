import { Button, Grid, Typography, Box } from "@mui/material";
import styled from "styled-components";
import React from "react";
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

  const footerMenu = [
    { title: "About", link: "#" },
    { title: "Growers", link: "#" },
    { title: "Merchants", link: "#" },
    { title: "Partners", link: "#" },
    { title: "Contact", link: "#" },
  ];

  const socialLinks = [
    { title: "Facebook", link: "#" },
    { title: "Twitter", link: "#" },
    { title: "Linkedin", link: "#" },
    { title: "Instagram", link: "#" },
  ];
  return (
    <Grid
      container
      sx={{
        width: "100%",
        bottom: "0px",
        backgroundSize: "cover",
        height: "600px",

        padding: "200px 200px",

        backgroundImage:
          " linear-gradient(to left, rgba(42, 219, 167, 0.8), rgba(10, 138, 151, .9)),url('images/loj.png')",
      }}
    >
      <Grid md={3} xs={12} item>
        {" "}
        <img src="images/logo2.png" />
      </Grid>
      <Grid
        md={3}
        sx={{ gap: "29px", display: "flex", flexDirection: "column" }}
        xs={12}
        item
      >
        <Typography
          fontSize="24px"
          fontWeight="500"
          lineHeight="36px"
          color="white"
        >
          Strassburger Strasse 55 <br />
          10405 Berlin <br />
          Germany
        </Typography>
        <Typography color="white" fontSize="14px" fontWeight="600px">
          (434) 546-4356
        </Typography>
        <Typography color="white" fontSize="14px" fontWeight="600px">
          infor@greentrade.com
        </Typography>
      </Grid>
      <Grid
        item
        md={2}
        xs={4}
        sx={{ gap: "14px", display: "flex", flexDirection: "column" }}
      >
        {footerMenu.map((item, index) => (
          <Typography
            key={index}
            color="white"
            fontSize="12px"
            fontWeight="600px"
          >
            {item.title}
          </Typography>
        ))}
      </Grid>
      <Grid
        item
        md={2}
        xs={4}
        sx={{ gap: "14px", display: "flex", flexDirection: "column" }}
      >
        {socialLinks.map((item, index) => (
          <Typography
            color="white"
            fontSize="12px"
            fontWeight="600px"
            key={index}
          >
            {item.title}
          </Typography>
        ))}
      </Grid>{" "}
      <Grid
        item
        md={2}
        xs={4}
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
          display: "flex",
        }}
      >
        {" "}
        <Logo src="images/iconUp.png" />
      </Grid>
    </Grid>
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
const Logo = styled.img`
width:52px,
height:52px,
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
