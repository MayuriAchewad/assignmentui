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
  const listItem4 = [
    {
      url: "bard-fill",
      title: "Market Trends Analysis",
      desc: "Predictive insights to guide real estate strategies.",
    },
    {
      url: "",
      title: "Targeted Buyer Persona",
      desc: "Understand and connect with your ideal property buyers.",
    },
    {
      url: "",
      title: "Competitor Insights",
      desc: "Stand out in the property market with informed strategies.",
    },
    {
      url: "",
      title: "Visual Content Appeal",
      desc:
        "Captivate buyers with appealing visuals and immersive experiences.",
    },
  ];
  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        
              {listItem4.map((item) => (
                <Card sx={{margin:2, zIndex:2}}>
                <CardContent>
                  <Grid container spacing={2}>
                <Grid sx={{marginTop:5}} item xs={1.5}>
                  <img src={`./Images/${item.url}.png`} alt="" />
                </Grid>
                <Grid item xs={10.5}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </Grid>
            </Grid>
          </CardContent>
        </Card>
              ))}
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <img className="img5" src="./Images/Frame 892.png" alt="" />
      </Grid>
    </>
    // <>
    //     <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    //     <Typography
    //       sx={{
    //         color: "#000C1A",
    //         fontFamily: "monospace",
    //         fontWeight: "700px",
    //         fontSize: "32px",
    //         lineHeight: "48px",
    //         textAlign: "center",
    //       }}
    //     >
    //       Navigating Real Estate's Digital Landscape
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    //     <Typography
    //       sx={{
    //         color: "#333333",
    //         fontFamily: "sans-serif",
    //         fontWeight: "400px",
    //         fontSize: "24px",
    //         lineHeight: "36px",
    //         textAlign: "center",
    //       }}
    //     >
    //       Insights for Real Estate Marketing Advantage
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    //     <img src="./Images/Frame 893.png" alt="" />
    //   </Grid>
    // </>
  );
};
