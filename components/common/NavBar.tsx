import { Button, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";

import React from "react";
export const NavBar = () => {
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
      container
      sx={{
        backgroundColor: "red",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 62px",
        background:
          "linear-gradient(269.27deg, #2ADBA7 13.15%, #0A8A97 95.52%)",
      }}
    >
      <Grid item>
        <img src="images/logo2.png" />
      </Grid>
      <Grid
        item
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-around",
          gap: "68px",
        }}
      >
        {Menu.map((item) => (
          <Typography color="white" fontWeight="700" fontSize="14px">
            {item.title}
          </Typography>
        ))}
      </Grid>
      <Grid
        item
        sx={{ flexDirection: "row", display: "flex", alignItems: "center" }}
      >
        <LanguageIcon sx={{ color: "white" }} />
        <Typography color="white" sx={{ margin: "0px 20px 0px 15px" }}>
          EN
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "white", padding: "0px", margin: "0px" }}
        >
          <GradientText>Login</GradientText>
        </Button>
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
