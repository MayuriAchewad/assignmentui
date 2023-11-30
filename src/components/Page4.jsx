import {
    Avatar,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
  import React from "react";

export const Page4 = () => {
  return (
    <>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography
          sx={{
            color: "#000C1A",
            fontFamily: "monospace",
            fontWeight: "700px",
            fontSize: "32px",
            lineHeight: "48px",
            textAlign: "center",
          }}
        >
          Navigating Real Estate's Digital Landscape
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography
          sx={{
            color: "#333333",
            fontFamily: "sans-serif",
            fontWeight: "400px",
            fontSize: "24px",
            lineHeight: "36px",
            textAlign: "center",
          }}
        >
          Insights for Real Estate Marketing Advantage
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <img src="./Images/Frame 893.png" alt="" />
      </Grid>
    </>
  )
}
