import {
    Avatar,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
  import React from "react";

export const Page2 = () => {
  return (
    <>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography
          sx={{
            color: "#000C1A",
            fontFamily: "Montserrat",
            fontWeight: "700px",
            fontSize: "32px",
            lineHeight: "48px",
            textAlign: "center",
          }}
        >
          Real Estate-Focused Digital Mastery
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
        <img src="./Images/cuate.png" width="507.12px" height="342px" alt="" />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography
              sx={{
                color: "#000C1A",
                fontFamily: "Montserrat",
                fontWeight: "700px",
                fontSize: "32px",
                lineHeight: "48px",
              }}
            >
              <h2>Unlock the Potential of Digital Real Estate Excellence</h2>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <p>
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brand's success in the ever-evolving
              digital property market.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <button
              style={{
                backgroundColor: "#0078FF",
                borderRadius: "32px",
                width: "233px",
                height: "32px",
                padding: "16.5px 64px 16.5px 64px",
                gap: "4px",
              }}
            >
              <span
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  size: "18px",
                  lineHeight: "28px",
                  textAlign: "center",
                }}
              >
                Get started
              </span>
            </button>
          </Grid>
        </Grid>
      </Grid>
  </>
  )
}
