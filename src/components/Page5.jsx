import {
    Avatar,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
  import React from "react";

export const Page5 = () => {
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
          Driving Property Inquiries to Conversions
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
Streamlined Strategies for Real Estate Success        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <img src="./Images/bro.png" alt="" />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Typography
          sx={{
            color: "#000C1A",
            fontFamily: "monospace",
            fontWeight: "700px",
            fontSize: "32px",
            lineHeight: "48px"
          }}
        >
Optimized Path to Property Purchase        </Typography>
      {/* </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}> */}
        <Typography
          sx={{
            color: "#333333",
            fontFamily: "sans-serif",
            fontWeight: "400px",
            fontSize: "24px",
            lineHeight: "36px"
          }}
        >
In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.      
</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Button
        sx={{
          bgcolor: "#0078FF",
          borderRadius: "32px",
          width: "233px",
          height: "32px",
          padding: "16.5px 64px 16.5px 64px",
          gap: "4px",
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontFamily: "Montserrat",
            fontWeight: 600,
            size: "18px",
            lineHeight: "28px",
            textAlign: "center",
          }}
        >
          Get started
        </Typography>
      </Button>
      </Grid>
    </>
  )
}
