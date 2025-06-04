import { m } from "framer-motion";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography
} from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionViewport, varFade } from "../../components/animate";
import NextLink from "next/link";
import { useState } from "react";
import { PATH_PAGE } from "@/routes/paths";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  backgroundColor: "#EBEBEB",
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === "light"
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    // maxWidth: 365,
    width: "100%",
    height: 350,
    // height: "auto",

    margin: "auto",
    textAlign: "start",
    padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
    display: "flex", // Add flex display
    flexDirection: "column", // Stack children vertically
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)"
    },
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor: "#fff"
    },
    "&.cardLeft": {
      [theme.breakpoints.up("md")]: { marginTop: -40 }
    },
    "&.cardCenter": {
      [theme.breakpoints.up("md")]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.default,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        "&:before": {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: "auto",
          position: "absolute",
          width: "calc(100% - 40px)",
          height: "calc(100% - 40px)",
          borderRadius: Number(theme.shape.borderRadius) * 2,
          backgroundColor: "#fff",
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

const CARDS = [
  {
    name: "A COMMUNITY OF VISIONARIES",
    description:
      "Join a thriving community of bold thinkers, entrepreneurs, and innovators committed to shaping the future. At Vertria, you’re not just part of a network—you’re part of a movement that builds, leads, and inspires."
  },
  {
    name: "MENTORSHIP & GROWTH",
    description:
      "Connect with top mentors, industry experts, and peers who challenge limits and turn ambitious ideas into reality. Here, collaboration fuels progress, and shared knowledge drives success."
  },
  {
    name: "OPPORTUNITIES THAT PROPEL YOU FORWARD",
    description:
      "Vertria is more than a network—it’s a launchpad. With mentorship, sponsorship opportunities, and strategic partnerships, we provide the resources, funding, and support to help you grow and make a lasting impact."
  }
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

// ----------------------------------------------------------------------

const CardContent = ({ card }) => {
  return (
    <Grid item xs={12} md={4}>
      <m.div variants={varFade().inUp}>
        <CardStyle>
          {/* Name at the Top */}
          <Typography
            variant="h4"
            fontWeight="medium"
            sx={{ color: "text.primary", mt: 2, mb: 2 }}
          >
            {card.name}
          </Typography>

          {/* Description */}
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {card.description}
          </Typography>

          {/* Position & Company in a Row */}
          {/* <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" color="text.secondary">
              {card.position} • {card.company}
            </Typography>
          </Stack> */}
        </CardStyle>
      </m.div>
    </Grid>
  );
};

export default function CommunityNetwork() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "dark";

  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ textAlign: "center" }}>
        <Grid container spacing={4} mb={6}>
          <Grid item xs={12} md={7}>
            <Box sx={{ textAlign: "center", mb: 5 }}>
              <m.div variants={varFade().inDown}>
                <Typography
                  sx={{
                    typography: { xs: "body1", md: "h1" },
                    fontWeight: { xs: "regular", md: "regular" } // Change weight per screen size
                  }}
                  textAlign="left"
                >
                  THE ENTREPRENEURIAL NETWORK
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography
                  component="div"
                  variant="h4"
                  sx={{ mb: 5, mt: 1 }}
                  textAlign={"left"}
                  fontWeight={500}
                >
                  Drive Innovation With Vertria.
                </Typography>
              </m.div>

              <Divider sx={{backgroundColor: "#060606"}}/>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Image
              src={"/assets/network-author.png"}
              width={375}
              height={297}
            />
          </Grid>
        </Grid>

        {/* Grid Layout */}
        <Grid container spacing={4} justifyContent="center" mb={4}>
          {CARDS.map((card, index) => (
            <CardContent key={index} card={card} />
          ))}
        </Grid>

        <m.div
          variants={varFade().inDown}
          // animate={{ y: [-20, 0, -20] }}
          // transition={{ duration: 4, repeat: Infinity }}
        >
          <NextLink passHref href={PATH_PAGE.product}>
            <Button
              variant="contained"
              sx={{
                width: 200,
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#AB7587",
                color: "#FFF",
                marginTop: 8,
                border: "10px solid transparent",
                borderRadius: 16,
                letterSpacing: 2,
                fontWeight: 400,
                transition:
                  "color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: theme.palette.primary.dark,
                  transform: "translateY(-5px)"
                }
              }}
            >
              JOIN VERTRIA
            </Button>
          </NextLink>
        </m.div>
      </Container>
    </RootStyle>
  );
}
