import { m } from "framer-motion";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  useMediaQuery,
  Button,
  Link
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import Image from "next/image";
import ProductPricingCard from "./ProductPricingCard";
import { ProductApplyNow, ProductFaq, ProductSecureSpot } from ".";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",

  zIndex: 1,
  // backgroundImage: `url(/assets/images/community/hero.png)`,
  background: `linear-gradient(to bottom, #FFF, #EBEBEB)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    alignItems: "center"
  }
}));

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  width: "100%",
  height: "100%",
  objectfit: "conver",
  backgroundColor: "#060606"
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 2,
    maxWidth: 1440,
    margin: "auto",
    position: "relative",
    textAlign: "start",
    display: "flex",
    justifyContent: "start",
    padding: theme.spacing(15, 2),
    [theme.breakpoints.up("md")]: {
      textAlign: "start", // Center text for medium screens
      justifyContent: "center", // Center content horizontally
      alignItems: "center" // Center content vertically
      // padding: theme.spacing(15)
    }
  })
);

// ----------------------------------------------------------------------

export default function ProductHero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <MotionContainer>
      <RootStyle>
        {/* <HeroImgStyle
          alt="hero"
          src="/assets/images/home/african-patter-no-bg.png"
          // src="/assets/images/home/bg-african-pattern.png"
          // src="/assets/images/home/hero2.png"
          variants={varFade().inUp}
        /> */}

        <Container>
          <ContentStyle>
            {/* <Grid container alignItems={"center"} justifyContent={"center"}> */}
            {/* <Grid item xs={12}> */}
            <Stack
              spacing={0}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <m.div
                variants={varFade().inUp}
                // animate={{ y: [-20, 0, -20] }}
                // transition={{ duration: 4, repeat: Infinity }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 24, lg: 48 },
                    fontWeight: { xs: "medium", md: 500 },
                    // lineHeight: 0,
                    // color: "common.white",
                    textAlign: "center",
                    letterSpacing: 15,
                    mt: 5
                  }}
                >
                  VERTRIA PRICING PACKAGES
                </Typography>
              </m.div>

              <m.div
                variants={varFade().inUp}
                // animate={{ y: [-20, 0, -20] }}
                // transition={{ duration: 4, repeat: Infinity }}
              >
                <Typography
                  // variant="body2"
                  sx={{
                    fontSize: { xs: 18, lg: 24 },
                    fontWeight: { xs: "regular", md: 400 },
                    // lineHeight: 0,
                    // color: "common.white",
                    textAlign: "center",
                    // letterspacing: 27,
                    mt: 5
                  }}
                >
                  Your Journey starts now—secure your spot and bring your vision
                  to life with Vertria.
                </Typography>
              </m.div>
              <m.div
                variants={varFade().inUp}
                // animate={{ y: [-20, 0, -20] }}
                // transition={{ duration: 4, repeat: Infinity }}
              >
                <Typography
                  // variant="h3"
                  sx={{
                    fontSize: { xs: 16, lg: 24 },
                    fontWeight: "regular",
                    // lineHeight: 0,
                    // color: "common.white",
                    textAlign: "center",
                    // letterSpacing: 2,
                    mt: 5,
                    maxWidth: 700
                  }}
                >
                  Spots are limited, and demand is high. Choose the package that
                  fits your journey and take action today!
                </Typography>
              </m.div>
            </Stack>
            {/* </Grid> */}
            {/* </Grid> */}
          </ContentStyle>
        </Container>
      </RootStyle>

      <Box
        sx={{
          height: "auto",
          background: theme.palette.background.default,
          position: "relative",
          zIndex: 2
        }}
      >
        <ProductPricingCard />
        <ProductSecureSpot />
        <ProductApplyNow />
        {/* <HomeProgram /> */}
        {/* <HomeTeam /> */}
        {/* <HomeOutcomes /> */}

        {/* <HomeMenteeTestimonials /> */}
        <ProductFaq />
      </Box>
    </MotionContainer>
  );
}
