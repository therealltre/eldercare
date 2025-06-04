import { m } from "framer-motion";
// @mui
import { Box, Container, Typography, Grid, Card, Stack } from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionViewport, varFade } from "../../components/animate";
import { alpha, useTheme, styled } from "@mui/material/styles";


// ----------------------------------------------------------------------

const CARDS = [
  {
    title: "Innovation",
    description:
      "Leading the charge in developing and scaling digital solutions.",
    // href: "#contact"
  },
  {
    title: "Inclusion",
    description:
      "Ensuring communities across Africa benefit from digital growth.",
    // href: "#about"
  },
  {
    title: "Empowerment",
    description:
      "Providing the tools and education needed for economic sovereignty.",
    // href: "#"
  }
];

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === "light"
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    // maxWidth: 365,
    width: "100%",
    height: "100%",
    minHeight: 200,
    margin: "auto",
    textAlign: "start",
    padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
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

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

export default function AboutVision() {
  return (
    <Container component={MotionViewport} sx={{ mt: 10 }}>
      <Box
        sx={{
          mb: 10,
          position: "relative",
          borderRadius: 2,
          overflow: "hidden"
        }}
      >
        <Image
          src="/assets/images/home/about-img.png"
          alt="about-vision"
          effect="black-and-white"
          style={{
            width: "100%",
            height: "auto",
          }}
        />

        <Box
          sx={{
            bottom: { xs: 24, md: 30 },
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "absolute",
            justifyContent: "center"
          }}
        >
          {[
            "partner_bog",
            "partner_global_citizen",
            // "partner_gse1",
            "partner_telos-x",
            "partner_un-digital-library"
          ].map((logo) => (
            <m.div key={logo} variants={varFade().inUp}>
              <Image
                alt={logo}
                src={`/assets/images/about/${logo}.png`}
                // height={{ xs: 32, md: 74 }}
                sx={{
                  m: { xs: 2, md: 3 },

                  height: { md: 74 }
                  // height: { xs: 30, md: 74 }
                }}
              />
            </m.div>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 10, md: 10 }
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography
            component="div"
            variant="overline"
            sx={{ mb: 2, color: "text.disabled" }}
          >
            vertria
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Stack
            direction={"row"}
            spacing={1}
            sx={{ justifyContent: "center" }}
          >
            <Typography variant="h2">Our</Typography>
            <Typography
              variant="h2"
              sx={{
                backgroundcolor: "primary",
                backgroundImage: `linear-gradient(45deg, #FF8C42 , #02735E)`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 600
              }}
            >
              Core Values
            </Typography>
          </Stack>
        </m.div>

      </Box>


      <Grid container spacing={2}>
        {CARDS.map((card, index) => (
          <Grid item xs={12} lg={4} key={card.index}>
            <m.div variants={varFade().inUp}>
              <CardStyle
                sx={{
                  padding: { xs: 3, md: 5 },
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Added box-shadow for a smooth hover effect
                  "&:hover": {
                    borderRadius: 2, // Border radius stays consistent
                    transform: "translateY(-5px)", // Moves the card up by 5px
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" // Adds a subtle shadow for depth
                  }
                }}
              >
                <Typography
                  variant="h4"
                  paragraph
                  sx={{ textAlign: "start" }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    textAlign: "start"
                  }}
                >
                  {card.description}
                </Typography>


              </CardStyle>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
