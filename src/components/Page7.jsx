import {
    Avatar,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
  import React from "react";

export const Page7 = () => {
  return (
    <>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography
          sx={{
            color: "#000C1A",
            fontFamily: "Montserrat",
            fontWeight: "700px",
            fontSize: "48px",
            lineHeight: "72px",
            textAlign: "center",
          }}
        >
          Your Peace of Mind
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography
          sx={{
            color: "#333333",
            fontFamily: "Open Sans",
            fontWeight: "400px",
            fontSize: "24px",
            lineHeight: "36px",
            textAlign: "center",
          }}
        >
          Through our conversion-focused strategies, we ensure that property
          seekers are not just visitors, but engaged prospects ready to make
          their next move in the real estate market{" "}
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
    </>
  )
}
