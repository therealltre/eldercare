import { m } from "framer-motion";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Link,
  Typography,
} from "@mui/material";
// components
import Image from "../../components/Image";
import {
  MotionContainer,
  MotionViewport,
  varFade,
} from "../../components/animate";
import NextLink from "next/link";
import AboutWhat from "./AboutWhat";
import AboutVision from "./AboutVision";
import AboutTeam from "./AboutTeam";
import AboutTestimonials from "./AboutTestimonials";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  position: "sticky",
  top: 0,
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  zIndex: 1,
  width: "100%",
  height: "100vh",
  backgroundColor: "#060606",
  backgroundImage: `url(/assets/images/about/about-hero.png)`,
  textAlign: "center",
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
    maxWidth: 365,
    minHeight: 227,
    margin: "auto",
    textAlign: "center",
    padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    "&.cardLeft": {
      [theme.breakpoints.up("md")]: { marginTop: -40 },
    },
    "&.cardCenter": {
      [theme.breakpoints.up("md")]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
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
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
        },
      },
    },
  };
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  width: "100%",
  height: "100vh",
  objectfit: "cover",
  backgroundColor: "#060606",
  opacity: 0.5,
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  const theme = useTheme();

  return (
    <MotionContainer>
      <RootStyle>
        {/* <HeroImgStyle
          alt="hero"
          src="/assets/images/about/about-hero.png"
          // src="/assets/images/about/web3-bg-svg.svg"
          variants={varFade().inUp}
        /> */}

        <Container>
          <Box
            sx={{
              textAlign: "center",
              mb: { xs: 10, md: 10 },
            }}
          >
            <Image
              visibleByDefault
              disabledEffect
              alt="image shape"
              src="/assets/images/home/shape.svg" //replace with african pattern
              sx={{
                top: 0,
                right: 0,
                bottom: 0,
                width: 720,
                height: 720,
                opacity: 0.48,
                my: "auto",
                position: "absolute",
                display: { xs: "none", md: "block" },
              }}
            />
            <m.div variants={varFade().inUp}>
              <Typography
                sx={{
                  mt: 20,
                  fontSize: { xs: 42, lg: 72 },
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "common.white",
                  textAlign: "center", // Ensure text is centered
                  // margin: "0 auto",    // Center text block
                }}
              >
                ABOUT VERTRIA <br />
              </Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography
                sx={{
                  marginTop: 2,
                  color: "common.white",
                  fontSize: { xs: 18, lg: 24 },
                  textAlign: "center", // Aligns all text to center
                }}
              >
                Vertria is a cutting-edge AI technology platform designed to
                revolutionize the way businesses
              </Typography>
            </m.div>
          </Box>
        </Container>
      </RootStyle>
      <Box
        sx={{
          height: "auto",
          background: theme.palette.background.default,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* <AboutWhat id="about-what" />
        <AboutVision id="about-vision" />
        <Divider
          orientation="vertical"
          sx={{ my: 10, mx: "auto", width: 2, height: 40 }}
        /> */}
        {/* <AboutTeam /> */}
        {/* <AboutTestimonials /> */}
      </Box>
    </MotionContainer>
  );
}
