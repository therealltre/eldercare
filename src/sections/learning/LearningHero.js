import {
  m,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  easeOut
} from "framer-motion";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  useMediaQuery
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import { useRef, useEffect } from "react";
import LearningGrowth from "./LearningGrowth";
import LearningJourney from "./LearningJourney";
import LearningFaq from "./LearningFaq";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  zIndex: 1,
  // backgroundImage: `url(/assets/images/learning/hero.png)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  overflow: "hidden", // Prevent elements from overflowing during animations
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    alignItems: "center"
  },
  [theme.breakpoints.up("xs")]: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    backgroundImage: `url(/assets/images/learning/hero.png)`,
    backgroundSize: "fill",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.1)", // Dark overlay (adjust opacity)
      zIndex: 1
    },

    // Ensure content is above the overlay
    zIndex: 2
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

// Word animation components
const AnimatedWord = ({ text, delay = 0 }) => {
  return (
    <span style={{ display: "inline-block", overflow: "hidden" }}>
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{ display: "inline-block", marginRight: "8px" }}
        >
          {word.split("").map((char, charIndex) => (
            <m.span
              key={charIndex}
              style={{ display: "inline-block", gap: 2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: delay + wordIndex * 0.3 + charIndex * 0.05
              }}
            >
              {char}
            </m.span>
          ))}
        </span>
      ))}
    </span>
  );
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

export default function LearningHero() {
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
      <RootStyle ref={heroRef}>
        <m.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(/assets/images/learning/hero.png)`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            scale: smoothScale,
            zIndex: 0
          }}
        />

        {/* Dark overlay with animation */}
        <m.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            zIndex: 1
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <Container style={{ position: "relative", zIndex: 3 }}>
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
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 24, lg: 84 },
                      fontWeight: { xs: "medium", md: 400 },
                      color: "common.white",
                      textAlign: "center",
                      letterSpacing: { xs: "15px", lg: "30px" }, // Adjust spacing for different screens
                      mt: 5,
                      overflow: "hidden"
                    }}
                  >
                    <AnimatedWord text="LEARN THE" delay={0.3} />
                  </Typography>
                </m.div>

                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 24, lg: 84 },
                      fontWeight: { xs: "medium", md: 400 },
                      color: "common.white",
                      textAlign: "center",
                      letterSpacing: { xs: "15px", lg: "30px" }, // Adjust spacing for different screens
                      mt: 5,
                      overflow: "hidden"
                    }}
                  >
                    <AnimatedWord text="VERTRIA WAY" delay={0.4} />
                  </Typography>
                </m.div>

                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 1.2
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "regular",
                      color: "common.white",
                      textAlign: "center",
                      mt: 5
                    }}
                  >
                    Grow with Purpose - Lead with Sustainability
                  </Typography>
                </m.div>
              </Stack>
            </ContentStyle>
          </m.div>
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
        <ScrollAnimationWrapper>
          <LearningGrowth />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper threshold={0.3}>
          <LearningJourney />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <LearningFaq />
        </ScrollAnimationWrapper>
      </Box>
    </MotionContainer>
  );
}
