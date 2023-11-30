import {
    Avatar,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
  import React from "react";

export const Page8 = () => {
  return (
    <>
    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
        <img className="img3" src="./Images/vid.png" alt="" />
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <Grid container spacing={2}>
          <Grid item xs={2} sm={1.5} md={1.5} lg={1.5} xl={1.5}>
            <Avatar src="./Images/Tabish formal photo (1) 1.png" />
          </Grid>
          <Grid item xs={8.5} sm={8.5} md={8.5} lg={8.5} xl={8.5}>
            <b>Tablish Khan</b>
          </Grid>
          <Grid item xs={1.5} sm={2} md={2} lg={2} xl={2}>
            <img className="img4" src="./Images/Symbol.png" alt="" />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography
              sx={{
                color: "#333333",
                fontFamily: "Open Sans",
                fontWeight: "400px",
                fontSize: "24px",
                lineHeight: "36px",
              }}
            >
              Osumare's expertise in pharma marketing is unparalleled. Their
              strategies helped us navigate complex regulations while driving
              remarkable growth.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <img className="img6" src="./Images/Frame 878.png" alt="" />
        </Grid>
    </>
  )
}
