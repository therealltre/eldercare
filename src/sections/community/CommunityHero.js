import {
  m,
  useScroll,
  useTransform,
  useSpring,
  useInView
} from "framer-motion";
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
import { useRef, useEffect } from "react";
import Image from "next/image";
import CommunityHeroLabels from "./CommunityHeroLabels";
import { CommunityContact, CommunityMovement, CommunityNetwork } from ".";
import { HomeSocials } from "../home";
import CommunityFaq from "./CommunityFaq";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  zIndex: 1,
  backgroundImage: `url(/assets/images/community/hero.png)`,
  // background: `linear-gradient(to bottom, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
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
          <m.div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `url(/assets/images/community/hero.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              scale: smoothScale
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 24, lg: 84 },
                        fontWeight: { xs: "medium", md: 400 },
                        fontFamily: '"Blair ITC", sans-serif',
                        textAlign: "center",
                        letterSpacing: { xs: "15px", lg: "30px" }, // Adjust spacing for different screens
                        mt: 5,
                        display: "flex",
                        gap: 2
                      }}
                    >
                      {"JOIN THE".split("").map((char, index) => (
                        <m.span
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {char}
                        </m.span>
                      ))}
                    </Typography>
                  </m.div>

                  <m.div variants={itemVariants}>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: { xs: 24, lg: 84 },
                        fontWeight: { xs: "medium", md: 400 },
                        fontFamily: '"Blair ITC", sans-serif',
                        textAlign: "center",
                        letterSpacing: { xs: "15px", lg: "30px" }, // Adjust spacing for different screens
                        mt: 5,
                        display: "flex",
                        gap: 2
                      }}
                    >
                      {["MOVEMENT"].map((word, index) => (
                        <m.span
                          key={word}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: (index + 2) * 0.2
                          }}
                          style={{ display: "inline-block", scale: [0.9, 1] }}
                        >
                          {word}
                        </m.span>
                      ))}
                    </Typography>
                  </m.div>

                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "regular",
                        textAlign: "center",
                        mt: 5
                      }}
                    >
                      {" Be the Future. Build with Vertria"
                        .split("")
                        .map((char, index) => (
                          <m.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {char}
                          </m.span>
                        ))}
                    </Typography>
                  </m.div>
                </Stack>
              </ContentStyle>
            </m.div>
          </Container>
        </RootStyle>
      </ScrollAnimationWrapper>

      <Box
        sx={{
          height: "auto",
          background: theme.palette.background.default,
          position: "relative",
          zIndex: 2
        }}
      >
        <ScrollAnimationWrapper>
          <CommunityHeroLabels />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper threshold={0.3}>
          <CommunityNetwork />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <CommunityContact />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <CommunityMovement />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <CommunityFaq />
        </ScrollAnimationWrapper>
      </Box>
    </MotionContainer>
  );
}
