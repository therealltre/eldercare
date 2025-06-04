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
  Typography,
} from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionViewport, varFade } from "../../components/animate";
import NextLink from "next/link";
import { useState } from "react";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  //   paddingBottom: theme.spacing(15),
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15),
  },
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
    // height: 450,
    height: "auto",

    margin: "auto",
    textAlign: "start",
    padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
    display: "flex", // Add flex display
    flexDirection: "column", // Stack children vertically
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor: "#fff",
    },
    "&.cardLeft": {
      [theme.breakpoints.up("md")]: { marginTop: -40 },
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
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
        },
      },
    },
  };
});

const CARDS = [
  {
    name: "John Doe",
    position: "Software Engineer",
    company: "TechCorp",
    description:
      "Planning a special dinner party for my husband's birthday was stressful until I discovered Private Chef Everywhere. ",
  },
  {
    name: "Jane Smith",
    position: "Product Manager",
    company: "InnovateX",
    description:
      "Planning a special dinner party for my husband's birthday was stressful until I discovered Private Chef Everywhere. ",
  },
  {
    name: "Michael Brown",
    position: "Blockchain Developer",
    company: "CryptoWorld",
    description:
      "Planning a special dinner party for my husband's birthday was stressful until I discovered Private Chef Everywhere. ",
  },
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

// ----------------------------------------------------------------------

const CardContent = ({ card }) => {
  return (
    <Grid item xs={12} md={4}>
      <m.div variants={varFade().inUp}>
        <CardStyle>
          {/* Description */}
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {card.description}
          </Typography>

          {/* Name at the Top */}
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "text.secondary", mt: 2 }}
          >
            {card.name}
          </Typography>

          {/* Position & Company in a Row */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" color="text.secondary">
              {card.position} • {card.company}
            </Typography>
          </Stack>
        </CardStyle>
      </m.div>
    </Grid>
  );
};

export default function HomeMenteeTestimonials() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "dark";

  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ textAlign: "center" }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">MENTEE TESTIMONIALS</Typography>
          </m.div>
        </Box>

        {/* Grid Layout */}
        <Grid container spacing={4} justifyContent="center">
          {CARDS.map((card, index) => (
            <CardContent key={index} card={card} />
          ))}
        </Grid>

        <Box sx={{ mt: 5 }}>
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
                    transform: "translateY(-5px)",
                  },
                }}
              >
                Read More
              </Button>
            </NextLink>
          </m.div>
        </Box>
      </Container>
    </RootStyle>
  );
}
