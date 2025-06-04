import { m } from "framer-motion";
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
  TextField,
  Card
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import Image from "next/image";
import NextLink from "next/link";
// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  background: theme.palette.background.paper, // Ensures consistency across screen sizes
  display: "flex",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(5, 2) // Adjust padding for mobile
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 2,
    maxWidth: 1440,
    margin: "auto",
    position: "relative",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(15, 2),

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(5, 2) // Adjust padding for smaller screens
    }
  })
);

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === "light"
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    // maxWidth: 365,
    width: "100%",
    height: 300,
    // height: "auto",

    margin: "auto",
    textAlign: "start",
    padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
    display: "flex", // Add flex display
    flexDirection: "column", // Stack children vertically
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)"
    },
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor: theme.palette.background.default
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
          backgroundColor: theme.palette.background.default,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

// ----------------------------------------------------------------------
const CARDS = [
  {
    name: "WORLD-CLASS MENTORSHIP.",
    description:
      "Experienced professionals guiding the next wave of entrepreneurs."
  },
  {
    name: "REAL-WORLD BUSINESS CHALLENGES",
    description: " Hands-on learning that drives real impact."
  },
  {
    name: "A THRIVING NETWORK",
    description:
      "Entrepreneurs, mentors, and investors working together to drive innovation."
  }
];

const CardContent = ({ card }) => {
  return (
    <Grid item xs={12} md={4}>
      <m.div variants={varFade().inUp}>
        <CardStyle>
          {/* Name at the Top */}
          <Typography
            variant="h5"
            sx={{
              color: "text.primary",
              mt: 2,
              mb: 2,
              fontFamily: '"Blair ITC", sans-serif',
              fontWeight: "regular",

            }}
          >
            {card.name}
          </Typography>

          {/* Description */}
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {card.description}
          </Typography>

          {/* Position & Company in a Row */}
          {/* <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" color="text.secondary">
              {card.position} • {card.company}
            </Typography>
          </Stack> */}
        </CardStyle>
      </m.div>
    </Grid>
  );
};

export default function ContactJoinCommunity() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MotionContainer>
      <RootStyle>
        <Container>
          <ContentStyle>
            <Grid container>
              <Grid item xs={12}>
                <Stack
                  spacing={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        fontSize: { xs: 24, lg: 28 },
                        fontWeight: { xs: "mdeium", md: "medium" },
                        fontFamily: '"Blair ITC", sans-serif',
                        textAlign: "center",
                        letterSpacing: 2,
                        mt: 5
                      }}
                    >
                      BE PART OF
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        fontSize: { xs: 16, lg: 28 },
                        fontWeight: { xs: "mdeium", md: "medium" },
                        fontFamily: '"Blair ITC", sans-serif',
                        textAlign: "center",
                        // mt: 5,
                        mb: 5,
                        letterSpacing: 2
                      }}
                    >
                      SOMETHING BIGGER
                    </Typography>
                  </m.div>

                  {/* Grid Layout */}
                  <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    direction={{ xs: "column", md: "row" }} // Stack on mobile
                    mb={4}
                  >
                    {CARDS.map((card, index) => (
                      <CardContent key={index} card={card} />
                    ))}
                  </Grid>

                  <m.div
                    variants={varFade().inDown}
                    // animate={{ y: [-20, 0, -20] }}
                    // transition={{ duration: 4, repeat: Infinity }}
                  >
                    <NextLink passHref href="#">
                      <Button
                        variant="contained"
                        sx={{
                          width: 200,
                          position: "relative",
                          overflow: "hidden",
                          backgroundColor: "#FFDC58",
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
                        JOIN VERTRIA
                      </Button>
                    </NextLink>
                  </m.div>
                </Stack>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </MotionContainer>
  );
}
