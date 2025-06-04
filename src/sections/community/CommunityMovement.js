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
  Link,
  TextField
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import Image from "next/image";
import NextLink from "next/link";
import { PATH_PAGE } from "@/routes/paths";
// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  background: "#EBEBEB",

  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(10)
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

export default function CommunityMovement() {
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
                        fontSize: { xs: 24, lg: 50 },
                        // color: "common.white",
                        textAlign: "center",
                        mt: 5
                      }}
                    >
                      Empower the Future of Entrepreneurship{" "}
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        fontSize: { xs: 16, lg: 18 },
                        // color: "common.white",
                        textAlign: "center",
                        mt: 5,
                        // mb: 5,
                        maxWidth: 1000
                      }}
                    >
                      <strong> Be a Mentor:</strong> Share your knowledge, guide
                      the next generation of innovators, and help shape the
                      future of entrepreneurship
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        fontSize: { xs: 16, lg: 18 },
                        // color: "common.white",
                        textAlign: "center",
                        // mt: 5,
                        // mb: 1,
                        maxWidth: 1000
                      }}
                    >
                      <strong>Be a Sponsor:</strong> Empower rising talent by
                      providing funding, resources, and opportunities to
                      accelerate their journey.
                    </Typography>
                  </m.div>
                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        fontSize: { xs: 16, lg: 18 },
                        // color: "common.white",
                        textAlign: "center",
                        // mt: 2,
                        mb: 5,
                        maxWidth: 900
                      }}
                    >
                      Together, we’re building a future where great ideas don’t
                      just stay ideas—they become reality.
                    </Typography>
                  </m.div>

                  <m.div
                    variants={varFade().inDown}
                    // animate={{ y: [-20, 0, -20] }}
                    // transition={{ duration: 4, repeat: Infinity }}
                  >
                    <NextLink passHref href={PATH_PAGE.contact}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          fontSize: 20,
                          fontWeight: 300,
                          minWidth: {xs: '100%', md: 400},
                          // maxWidth: 700,
                          position: "relative",
                          overflow: "hidden",
                          backgroundColor: "#FFDC58",
                          color: "#060606",
                          marginTop: 2,
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
                        SUPPORT THE MOVEMENT
                      </Button>
                    </NextLink>
                  </m.div>

                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        fontSize: { xs: 16, lg: 16 },
                        // color: "common.white",
                        textAlign: "center",
                        // mt: 5,
                        mb: 5
                        // maxWidth: 900
                      }}
                    >
                      Invest in the future of entrepreneurship today!
                    </Typography>
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
