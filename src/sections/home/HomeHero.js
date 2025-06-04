import {
  m,
  useScroll,
  useTransform,
  useSpring,
  useInView
} from "framer-motion";
import { alpha, styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  useMediaQuery,
  Button,
  Link,
  Card
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import { useRef, useEffect } from "react";
import HomeAbout from "./HomeAbout";
import HomeServices from "./HomeServices";
import HomeTicker from "./HomeTicker";
import HomeVision from "./HomeVision";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  zIndex: 1,

  overflow: "hidden", // Prevent elements from overflowing during animations
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
  objectFit: "cover",
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

// Custom component for scroll-triggered animations
const ScrollAnimationWrapper = ({ children, threshold = 0.2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: threshold });

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
};

const ScrollNoAnimationWrapper = ({ children, threshold = 0.2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: threshold });

  return (
    <>
      {/* <m.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      > */}
      {children}
      {/* </m.div> */}
    </>
  );
};

const HeroVideoStyle = styled("video")({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundColor: "#060606"
});

// ----------------------------------------------------------------------

export default function CommunityHero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery("(max-width:600px)");

  // Refs for scroll animations
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // Scroll animation hooks
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Smooth spring animation for scrolling effects
  const smoothScale = useSpring(scale, { damping: 15, stiffness: 100 });

  return (
    <MotionContainer>
      <ScrollAnimationWrapper>
        <RootStyle ref={heroRef}>
          <HeroVideoStyle
            autoPlay
            loop
            muted
            playsInline
            src="/assets/videos/home-hero-video.mp4" // replace with your video path
          />

          {/* <m.div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `url(/assets/home-hero-img.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              scale: smoothScale
            }}
          /> */}

          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)", // change the opacity/color as needed
              zIndex: 1
            }}
          />

          <Container style={{ position: "relative", zIndex: 2 }}>
            <m.div
              style={{ opacity }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <ContentStyle ref={contentRef}>
                {/* <Grid container> */}
                {/* <Grid item xs={12} lg={8}> */}
                <Stack
                  spacing={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        direction: "row",
                        alignItems: "center",
                        backgroundColor: theme.vars
                          ? `rgba(${theme.palette.background.default} / 0.4)`
                          : alpha(theme.palette.background.default, 0.2),

                        p: 1,
                        borderRadius: 1
                      }}
                      gap={2}
                    >
                      <Typography sx={{ color: "common.white" }}>
                        Place Of Joy. We make you feel at home
                      </Typography>

                      {/* <Button variant="contained">Read More</Button> */}
                    </Box>
                  </m.div>

                  <m.div variants={itemVariants}>
                    <Typography
                      sx={{
                        fontSize: { xs: "28px", md: "54px" },
                        fontWeight: 500,
                        color: "common.white",
                        maxWidth: "750px",
                        textAlign: "center"
                      }}
                    >
                      Compassionate care, tailored for your loved ones.
                    </Typography>
                  </m.div>

                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: 400,
                        color: "common.white",
                        maxWidth: "700px",
                        textAlign: "center"
                      }}
                    >
                      We provide compassionate, personalized care that ensures
                      your loved ones live with dignity, comfort, and
                      independence.{" "}
                    </Typography>{" "}
                  </m.div>

                  <Stack sx={{ flexDirection: "row" }} gap={2}>
                    <Button variant="contained" size="large">
                      Contact Us
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        color: "primary.main",
                        backgroundColor: "common.white"
                      }}
                    >
                      Schedule a consultation
                    </Button>
                  </Stack>
                </Stack>
                {/* </Grid> */}

                {/* <Grid item xs={12} lg={4}>
                    <m.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2 }}
                    >
                      <Stack
                        direction={{ xs: "column" }}
                        spacing={3}
                        sx={{
                          mt: 2,
                          flexWrap: "wrap"
                        }}
                      >
                        <Card
                          elevation={6}
                          sx={{
                            p: 3,
                            flex: 1,
                            minWidth: 180,
                            backgroundColor: alpha(
                              theme.palette.background.paper,
                              0.85
                            ),
                            borderRadius: 2
                          }}
                        >
                          <Typography variant="h6" gutterBottom>
                            Hospice Care
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Compassionate end-of-life care that focuses on
                            providing comfort, supporting both the senior and
                            their family during this difficult time.
                          </Typography>
                        </Card>

                        <Card
                          elevation={2}
                          sx={{
                            p: 3,
                            flex: 1,
                            minWidth: 180,
                            backgroundColor: alpha(
                              theme.palette.background.paper,
                              0.75
                            ),
                            borderRadius: 2
                          }}
                        >
                          <Typography variant="h6" gutterBottom>
                            Assisted Living
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            A safe and supportive environment for seniors who
                            require assistance with daily living but still wish
                            to maintain their independence.
                          </Typography>
                        </Card>
                      </Stack>
                    </m.div>
                  </Grid> */}
                {/* </Grid> */}
              </ContentStyle>
            </m.div>
          </Container>
        </RootStyle>
      </ScrollAnimationWrapper>

      <Box
        sx={{
          height: "auto",
          background: theme.palette.background.paper,
          position: "relative",
          zIndex: 2
        }}
      >
        <ScrollAnimationWrapper>
          <HomeTicker />
        </ScrollAnimationWrapper>
        <ScrollNoAnimationWrapper>
          <HomeAbout />
        </ScrollNoAnimationWrapper>
        <ScrollAnimationWrapper>
          <HomeVision />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <HomeServices />
        </ScrollAnimationWrapper>
      </Box>
    </MotionContainer>
  );
}
