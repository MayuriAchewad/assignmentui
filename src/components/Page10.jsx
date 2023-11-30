import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Page10 = () => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <img
                    src="./Images/Osumare Logo-01 (2) 4.png"
                    width="137"
                    height="72px"
                    alt=""
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography>
                    The best digital marketing agency in Pune with a proven
                    track record of consistently delivering quality service.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      color: "#000C1A",
                      fontFamily: "Montserrat",
                      fontWeight: "700px",
                      fontSize: "18px",
                      lineHeight: "27px",
                      letterSpacing: "0.3px",
                    }}
                  >
                    Address
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      color: "#333333",
                      fontFamily: "Open Sans",
                      fontWeight: "400px",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                    Pune-14, Maharastra, India.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      color: "#000C1A",
                      fontFamily: "Inter",
                      fontWeight: "700px",
                      fontSize: "24px",
                      lineHeight: "36px",
                    }}
                  >
                    Contacts
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      gap: "8px",
                    }}
                  >
                    <EmailIcon
                      sx={{ width: 20, height: 18, color: "#000C1A" }}
                    />
                    hello@osumare.in
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography>
                    <LocalPhoneIcon
                      sx={{ width: 20, height: 18, color: "#000C1A" }}
                    />
                    +91 8459 8762 26
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      color: "#000C1A",
                      fontFamily: "Montserrat",
                      fontWeight: "700px",
                      fontSize: "24px",
                      lineHeight: "48px",
                      textAlign: "center",
                    }}
                  >
                    Menu
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      color: "#000C1A",
                      fontFamily: "Montserrat",
                      fontWeight: "500px",
                      fontSize: "16px",
                      lineHeight: "24px",
                      textAlign: "center",
                      gap: "16px",
                    }}
                  >
                    Home
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      color: "#000C1A",
                      fontFamily: "Montserrat",
                      fontWeight: "500px",
                      fontSize: "16px",
                      lineHeight: "24px",
                      textAlign: "center",
                      gap: "16px",
                    }}
                  >
                    About
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      color: "#000C1A",
                      fontFamily: "Montserrat",
                      fontWeight: "500px",
                      fontSize: "16px",
                      lineHeight: "24px",
                      textAlign: "center",
                      gap: "16px",
                    }}
                  >
                    Services
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      color: "#000C1A",
                      fontFamily: "Montserrat",
                      fontWeight: "500px",
                      fontSize: "16px",
                      lineHeight: "24px",
                      textAlign: "center",
                      gap: "16px",
                    }}
                  >
                    Work
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      color: "#000C1A",
                      fontFamily: "Montserrat",
                      fontWeight: "500px",
                      fontSize: "16px",
                      lineHeight: "24px",
                      textAlign: "center",
                      gap: "16px",
                    }}
                  >
                    Blog
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      color: "#000C1A",
                      fontFamily: "Montserrat",
                      fontWeight: "500px",
                      fontSize: "16px",
                      lineHeight: "24px",
                      textAlign: "center",
                      gap: "16px",
                    }}
                  >
                    Career
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    sx={{
                      color: "#000C1A",
                      fontFamily: "Montserrat",
                      fontWeight: "700px",
                      fontSize: "24px",
                      lineHeight: "48px"
                    }}
                  >
                    Social
                  </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <FacebookIcon></FacebookIcon>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <YouTubeIcon></YouTubeIcon>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <PinterestIcon></PinterestIcon>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <WhatsAppIcon></WhatsAppIcon>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <InstagramIcon></InstagramIcon>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
