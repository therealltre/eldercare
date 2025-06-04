import { m } from "framer-motion";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

// Animation
import { MotionViewport, varFade } from "../../components/animate";
import Iconify from "@/components/Iconify";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(m(Card))(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === "light"
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    width: "100%",
    height: "300px",
    margin: "auto",
    textAlign: "center",
    padding: theme.spacing(5),
    boxShadow: theme.customShadows.z12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.3s ease-in-out",
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor: "#fff"
    },
    "&:hover": {
      transform: "scale(1.05)", // Slightly increase size
      boxShadow: `0 10px 30px ${shadowCard(0.3)}` // Enhanced shadow
    }
  };
});

const CARDS = [
  {
    type: "percentage",
    value: "Real-World Experience",
    description: "Immersive learning bridges theory and practice.",
    size: "normal"
  },
  {
    type: "icon",
    value: "Personalized Mentorship",

    // icon: <Iconify icon="tdesign:chart-line" width={80} height={80} />,
    description: " Tailored one-on-one guidance for growth.",
    size: "wider"
  },
  {
    type: "percentage",
    value: "Strong Network",
    description: "Six-month community access for collaboration.",
    size: "normal"
  },
  {
    type: "icon",
    value: "Sustainable Growth",
    // icon: <Iconify icon="ri:pie-chart-fill" width={80} height={80} />,
    description: "Teaching responsible, long-term business strategies.",
    size: "wide"
  },
  {
    type: "icon",
    value: "Pitch Readiness",

    // icon: <Iconify icon="akar-icons:align-to-top" width={80} height={80} />,
    description: "Pitch Day prep ensures success.",
    size: "small"
  },
  {
    type: "percentage",
    value: "Inclusive Education",
    description: "Sponsorships make learning accessible to all.",
    size: "wide"
  }
];

// ----------------------------------------------------------------------

const CardContent = ({ card }) => {
  let gridSize;
  if (card.size === "wider") gridSize = { xs: 6, md: 4 };
  else if (card.size === "wide") gridSize = { xs: 6, md: 3.5 };
  //   else if (card.size === "small") gridSize = { xs: 12, md: 3 };
  else gridSize = { xs: 6, md: 3 };

  return (
    <Grid item {...gridSize}>
      <m.div variants={varFade().inUp}>
        <CardStyle>
          {/* Percentage or Icon Header */}
          {/* {card.type === "percentage" ? ( */}
          <Typography variant="h3" fontWeight="medium" color="text.primary">
            {card.value}
          </Typography>
          {/* ) : (
            card.icon
          )} */}

          {/* Description */}
          <Typography variant="body1" sx={{ color: "text.secondary", mt: 2 }}>
            {card.description}
          </Typography>
        </CardStyle>
      </m.div>
    </Grid>
  );
};

export default function HomeOutcomes() {
  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ textAlign: "center" }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <m.div variants={varFade().inDown}>
            <Typography component="div" variant="body2" sx={{ mb: 2 }}>
              OUTCOMES
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography variant="h3" fontWeight="medium">
              THE VERTRIA DIFFERENCE.
            </Typography>
          </m.div>
        </Box>

        {/* Grid Layout */}
        <Grid container spacing={2} justifyContent="center" mb={10}>
          {CARDS.map((card, index) => (
            <CardContent key={index} card={card} />
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
