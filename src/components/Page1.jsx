import {
    Avatar,
    Button,
    Card,

    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
  import React from "react";

export const Page1 = () => {
  return (
    <div className="mainparent">
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <img
        src="./Images/Osumare Logo-01 (2) 4.png"
        
        height="100px"
        alt=""
      />
    </Grid>
    <Grid align="end"  item xs={6} sm={6} md={6} lg={6} xl={6}>
      <Button
        sx={{
          border: "1px solid #000C1A",
          color: "#000C1A",
          padding: "10px, 24px, 10px, 24px",
          width:216,
          marginTop:3,
          height: 44,
          gap: "4px",
        }}
      >
        <Typography align="center">Contact us</Typography>
      </Button>
    </Grid>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Typography
        sx={{
          color: "#000C1A",
          fontFamily: "Montserrat",
          fontWeight: "700px",
          fontSize: {xs:34, sm:38, md:42, lg:46, xl:48},
          lineHeight: "72px",
          textAlign: "center",
        }}
      >
        Elevate <span style={{ color: "#0078FF" }}>Real Estate</span> Success
        with Osumare's Digital Expertise
      </Typography>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Typography
        sx={{
          color: "#333333",
          fontFamily: "Open Sans",
          fontWeight: "400px",
          fontSize: {xs:20,sm:21,md:22, lg:23,xl:24},

          lineHeight: "36px",
          textAlign: "center",
        }}
      >
        Tailored Solutions for Thriving in the Digital Real Estate Landscape
      </Typography>
    </Grid>
    <Grid item align="center" xs={12} sm={12} md={12} lg={12} xl={12}>
      <Button
        sx={{
          bgcolor: "#0078FF",
          borderRadius: "32px",
          width: "408px",
          height: "56px",
          padding: "13px 136px 13px 136px",
          gap: "4px",
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontFamily: "Montserrat",
            fontWeight: 700,
            size: "24px",
            lineHeight: "30px",
            textAlign: "center",
          }}
        >
          Get started
        </Typography>
      </Button>
    </Grid>
    <Grid align="center" item xs={12} sm={12} md={12} lg={12} xl={12}>
      <img
      className="img"
        src="./Images/Header image.png"
        alt=""
      />
    </Grid>
    {/* 796 */}
    </div>
  )
}
