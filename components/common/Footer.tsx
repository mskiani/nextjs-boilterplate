import { Button, Grid, Typography, Box } from "@mui/material";
import styled from "styled-components";
import React from "react";
import Link from "next/link";
export default function Footer() {
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

        padding: {
          md: "200px 200px",
          xs: "50px 20px",
        },

        backgroundImage:
          " linear-gradient(to left, rgba(42, 219, 167, 0.8), rgba(10, 138, 151, .9)),url('images/loj.png')",
      }}
    >
      <Grid
        md={3}
        xs={12}
        item
        sx={{
          display: "flex",
          justifyContent: {
            md: "flex-start",
            xs: "center",
          },
        }}
      >
        {" "}
        <img
          src="images/logo2.png"
          style={{ width: "193px", height: "45px" }}
        />
      </Grid>
      <Grid
        md={3}
        sx={{
          display: "flex",
          flexDirection: "column",

          gap: {
            md: "29px",
            xs: "10px",
          },
        }}
        xs={12}
        item
      >
        <Typography
          fontWeight="500"
          color="white"
          sx={{
            textAlign: {
              xs: "center",
              md: "left",
            },
            lineHeight: {
              md: "36px",
              xs: "30px",
            },
            fontSize: {
              xs: "24px",
              md: "24px",
            },
          }}
        >
          Strassburger Strasse 55 <br />
          10405 Berlin <br />
          Germany
        </Typography>
        <Typography
          color="white"
          fontSize="14px"
          fontWeight="600px"
          sx={{
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          (434) 546-4356
        </Typography>
        <Typography
          color="white"
          fontSize="14px"
          fontWeight="600px"
          sx={{
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
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
        <Link href="#top">
          <Logo src="images/iconUp.png" />
        </Link>
      </Grid>
    </Grid>
  );
}

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
