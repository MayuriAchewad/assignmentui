import {
    Avatar,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
  import React from "react";

export const Page6 = () => {
    const listItem2 = [
        {
          url: "virtual_10569504 2",
          title: "Call-to-Action Optimization",
          details:
            "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
        },
        {
          url: "online-store_3929777 2",
          title: "Landing Page Efficiency",
          details:
            "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.",
        },
        {
          url: "3d_9345318 2",
          title: "Social Proof Utilization",
          details:
            "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action",
        },
        {
          url: "augmented-reality_7065057 2",
          title: "Mobile-Friendly Experience",
          details:
            "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.",
        },
      ];
    const listItem3 = [
        {
          url: "weather_534564 2",
          title: "Effective CTAs",
          details:
            " See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.",
        },
        {
          url: "mass_9984040 2",
          title: "Conversion-Optimized Landing Pages",
          details:
            "Explore a case study where our landing page optimization increased property lead conversion rates by 30%",
        },
        {
          url: "3d-model_9040866 3",
          title: "Trust Building with Social Proof",
          details:
            "Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project",
        },
        {
          url: "medal_2439078 (1) 1",
          title: "Mobile-First Success:",
          details:
            " Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.",
        },
      ];
  return (
    <>
         <Grid sx={{marginTop:20}} item xs={12} sm={12} md={12} lg={12} xl={12}>
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

      {listItem2.map((item) => (
        <Grid align="center" item xs={12} sm={12} md={6} lg={6} xl={6}>
          <img
            src={`./Images/${item.url}.png`}
            width="128px"
            height="128px"
            alt=""
          />
          <h2>{item.title}</h2>
          <p>{item.details}</p>
        </Grid>
      ))}

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
          Our Expertise in Action
        </Typography>
      </Grid>

      {listItem3.map((item) => (
        <Grid align="center" item xs={12} sm={12} md={6} lg={6} xl={6}>
          <img
            src={`./Images/${item.url}.png`}
            width="128px"
            height="128px"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "100px",
              padding: "5px",
            }}
            alt=""
          />
          <h2>{item.title}</h2>
          <p>{item.details}</p>
        </Grid>
      ))}
    </>
  )
}
