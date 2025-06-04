import { m } from "framer-motion";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  Container,
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
  //   paddingBottom: theme.spacing(15),
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
    height: 280,
    // height: "auto",

    margin: "auto",
    textAlign: "start",
    padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
    display: "flex", // Add flex display
    flexDirection: "column", // Stack children vertically
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
    name: "IMMERSIVE LEARNING",
    position: "Software Engineer",
    company: "TechCorp",
    description:
      "Offering hands-on, real-world education that equips entrepreneurs with essential skills."
  },
  {
    name: "PERSONALIZED MENTORSHIP",
    position: "Product Manager",
    company: "InnovateX",
    description:
      "Providing tailored guidance to help individuals grow into strategic, impactful leaders."
  },
  {
    name: "SUSTAINABLE IMPACT",
    position: "Blockchain Developer",
    company: "CryptoWorld",
    description:
      "Fostering a cycle of giving back, where graduates contribute to the ecosystem as mentors, investors, and innovators."
  }
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

// ----------------------------------------------------------------------

const CardContent = ({ card, index }) => {
  return (
    <Grid item xs={12} md={4}>
      <m.div
        variants={{
          hidden: { opacity: 0, y: 40, scale: 0.95 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.2 // Staggered animation
            }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <CardStyle
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <Typography
            variant="h4"
            fontWeight="medium"
            sx={{ color: "text.primary", mt: 2, mb: 2, width: 170 }}
          >
            {card.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {card.description}
          </Typography>
        </CardStyle>
      </m.div>
    </Grid>
  );
};

export default function HomeProgram() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "dark";

  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ textAlign: "center" }}>
        {/* <Box sx={{ textAlign: "center", mb: 5 }}>
          <m.div variants={varFade().inUp}>
            <Typography
              component="div"
              variant="body2"
              sx={{ mb: 2 }}
            >
              A Three-phase program
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h3" fontWeight={"medium"}>
              COMBINE IMMERSIVE LEARNING <br /> WITH PERSONALIZED GUIDANCE
            </Typography>
          </m.div>
        </Box> */}

        {/* Grid Layout */}
        <Grid container spacing={4} justifyContent="center">
          {CARDS.map((card, index) => (
            <CardContent key={index} card={card} />
          ))}
        </Grid>

        <m.div
          variants={varFade().inDown}
          // animate={{ y: [-20, 0, -20] }}
          // transition={{ duration: 4, repeat: Infinity }}
        >
          <NextLink passHref href={PATH_PAGE.learning}>
            <Button
              variant="contained"
              sx={{
                width: 200,
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#FFDC58",
                // backgroundColor: theme.palette.primary.main,
                color: "#060606",
                marginTop: 8,
                border: "10px solid transparent",
                borderRadius: 16,
                transition:
                  "color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: theme.palette.primary.dark,
                  transform: "translateY(-5px)"
                }
              }}
            >
              FIND OUT MORE
            </Button>
          </NextLink>
        </m.div>

        {/* <Box sx={{ mt: 5 }}>
          <m.div variants={varFade().inDown}>
            <NextLink passHref href="#">
              <Button
                variant="contained"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#FFDC58",
                  color: "#000",
                  marginTop: 2,
                  marginBottom: 5,
                  border: "10px solid transparent",
                  borderRadius: 16,
                  transition:
                    "color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: theme.palette.primary.dark,
                    transform: "translateY(-5px)"
                  }
                }}
              >
                Read More
              </Button>
            </NextLink>
          </m.div>
        </Box> */}
      </Container>
    </RootStyle>
  );
}
