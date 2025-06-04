import { m } from "framer-motion";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  useMediaQuery
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import ContactJoinCommunity from "./ContactJoinCommunity";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",

  zIndex: 1,
  backgroundImage: `url(/assets/images/contact/hero.png)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    alignItems: "center"
  },
  [theme.breakpoints.up("xs")]: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    backgroundImage: `url(/assets/images/contact/hero.png)`,
    backgroundSize: "fill",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay (adjust opacity)
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

export default function LearningHero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <MotionContainer>
      <RootStyle>
        <Container>
          <ContentStyle>
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
                    fontSize: { xs: 24, lg: 84 },
                    letterSpacing: { xs: "15px", lg: "30px" }, // Adjust spacing for different screens
                    fontFamily: '"Blair ITC", sans-serif',
                    // lineHeight: 0,
                    color: "common.white",
                    textAlign: "center",
                    // letterspacing: 27,
                    mt: 5
                  }}
                >
                  JOIN US
                </Typography>
              </m.div>
            </Stack>
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
        {/* <ContactJoinCommunity /> */}
        {/* <CommunityContact /> */}
      </Box>
    </MotionContainer>
  );
}
