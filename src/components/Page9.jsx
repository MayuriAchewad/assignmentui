import React from 'react'
import {
    Avatar,
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";

export const Page9 = () => {
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
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card>
            <CardContent>

           
        <Grid container spacing={2}>
            <Grid item xs={12}  sm={12} md={12} lg={6} xl={6}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <label>Name</label>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField fullWidth placeholder='Enter Your Name'/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <label>Phone</label>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField fullWidth placeholder='Enter Your Number'/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <label>Email</label>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField fullWidth placeholder='Enter Your Total No of Vehicles:'/>
                </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12}  sm={12} md={12} lg={6} xl={6}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <label>Message</label>
                </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField fullWidth placeholder='Enter Your Total No of Vehicles:'/>
                </Grid>
            </Grid>
            
            </Grid>
            <Grid align="center" item xs={12} sm={12} md={12} lg={12} xl={12}>
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
      </Button>                </Grid>
        </Grid>
        </CardContent>
        </Card>
      </Grid>
    </>
  )
}
