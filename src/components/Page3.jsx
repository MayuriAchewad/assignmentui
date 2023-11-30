import {
    Avatar,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
  import React from "react";

export const Page3 = () => {
    const listItem = [
        {
          url: "Vector",
          title: "Automotive SEO",
          details:
            "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
        },
        {
          url: "PPC",
          title: "PPC Precision",
          details:
            "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.",
        },
        {
          url: "Social",
          title: "Social Acceleration",
          details:
            " Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.",
        },
        {
          url: "content",
          title: "Content Excellence",
          details:
            "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.",
        },
        {
          url: "Web design",
          title: "Web Design",
          details:
            "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.",
        },
        {
          url: "Data driven",
          title: "Data-Driven Insights",
          details:
            "Leverage data to refine your strategies, making informed decisions that drive revenue growth.",
        },
        {
          url: "Solutions",
          title: "End-to-End Solutions",
          details:
            "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.",
        },
        {
          url: "Video",
          title: "Video marketing",
          details:
            "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.",
        },
      ];
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
          Our Service Offerings
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
          Strategies that Drive Property Market Excellence
        </Typography>
      </Grid>
      {listItem.map((item) => (
        <Grid align="center" item xs={12} sm={12} md={6} lg={4} xl={3}>
          <Card
            sx={{
              width: "297",
              height: "239px",
              borderRadius: "8px",
              padding: "32px 16px 32px 16px",
              gap: "16px",
            }}
          >
            <CardContent>
              <img
                src={`./Images/${item.url}.png`}
                width="20px"
                height="18px"
                alt=""
              />
              <h2>{item.title}</h2>
              <p>{item.details}</p>
            </CardContent>
          </Card>
        </Grid>
      ))}

      <Grid align="center" item xs={12} sm={12} md={12} lg={12} xl={12}>
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
    </>
  )
}
