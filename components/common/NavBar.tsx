import { Button, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "next/link";
import React from "react";
export const NavBar = () => {
  const [metamaskStatus, setMetamaskStatus] = React.useState(false);

  React.useEffect(() => {
    // Client-side-only code
    //checking on user browser whther metamask is installed or not???
    var web3: any;
    window.addEventListener("load", function () {
      if (typeof web3 !== "undefined") {
        console.log("web3 is enabled");
        if (web3?.currentProvider?.isMetaMask === true) {
          setMetamaskStatus(true);
          console.log("MetaMask is active");
        } else {
          console.log("MetaMask is not available");
          setMetamaskStatus(false);
        }
      } else {
        console.log("web3 is not found");
      }
    });
  });

  const Menu = [
    {
      title: "Home",
      link: "/",
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
      id="top"
      container
      sx={{
        backgroundColor: "red",
        justifyContent: "space-between",
        alignItems: "center",

        padding: {
          md: "20px 62px",
          xs: "20px 20px",
        },
        background:
          "linear-gradient(269.27deg, #2ADBA7 13.15%, #0A8A97 95.52%)",
      }}
    >
      <Grid item>
        <Link href="/">
          <img src="images/logo2.png" />
        </Link>
      </Grid>

      <Grid
        item
        sx={{
          flexDirection: "row",
          display: {
            md: "none",
            xs: "flex",
          },
          alignItems: "center",
        }}
      >
        <LanguageIcon sx={{ color: "white" }} />
        <Typography color="white" sx={{ margin: "0px 20px 0px 15px" }}>
          EN
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "white", padding: "0px", margin: "0px" }}
        >
          <GradientText>{metamaskStatus ? "Logout" : "Login"}</GradientText>
        </Button>
      </Grid>
      <Grid
        item
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-around",
          gap: "68px",
          marginTop: {
            xs: "30px",
            md: "0px",
          },
        }}
      >
        {Menu.map((item, index) => (
          <Link key={item.title} href={item.link}>
            <Typography
              key={index}
              color="white"
              fontWeight="700"
              fontSize="14px"
            >
              {item.title}
            </Typography>
          </Link>
        ))}
      </Grid>

      <Grid
        item
        sx={{
          flexDirection: "row",
          alignItems: "center",
          display: {
            md: "flex",
            xs: "none",
          },
        }}
      >
        <LanguageIcon sx={{ color: "white" }} />
        <Typography color="white" sx={{ margin: "0px 20px 0px 15px" }}>
          EN
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "white", padding: "0px", margin: "0px" }}
        >
          <GradientText>{metamaskStatus ? "Logout" : "Login"}</GradientText>
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
