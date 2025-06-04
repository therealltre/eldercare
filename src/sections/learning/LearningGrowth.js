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
  TextField,
  Divider
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import Image from "next/image";
import NextLink from "next/link";
import { LearningFaqsList } from "../faqs";
import { PATH_PAGE } from "@/routes/paths";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  background: "#EBEBEB",

  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
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
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(15, 2),

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(8, 2)
    }
  })
);

// ----------------------------------------------------------------------

export default function LearningGrowth() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MotionContainer>
      <RootStyle>
        <Container>
          <ContentStyle>
            <m.div variants={varFade().inUp}>
              <Stack direction={{ xs: "column", md: "row" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: { xs: "medium", md: "medium" },
                    fontFamily: '"Blair ITC", sans-serif',

                    fontSize: { xs: 16, lg: 24 },
                    // color: "common.white",
                    textAlign: "center",
                    mt: { xs: 3, lg: 5 },
                    wordBreak: "break-all",
                    whiteSpace: "normal"
                  }}
                >
                  IMMERSIVE.TRANSFORMATIVE.
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: { xs: "medium", md: "medium" },
                    fontFamily: '"Blair ITC", sans-serif',

                    fontSize: { xs: 16, lg: 24 },
                    // color: "common.white",
                    textAlign: "center",
                    mt: { xs: 3, lg: 5 },
                    wordBreak: "break-all",
                    whiteSpace: "normal"
                  }}
                >
                  COLLABORATIVE
                </Typography>
              </Stack>
            </m.div>

            <Box
              sx={{
                width: { xs: 350, md: 1050 },
                height: { md: "0.1px", xs: 1.2 },
                bgcolor: "#060606",
                mx: "auto",
                mt: 1,
                mb: 5,
                opacity: 0.5
              }}
            />

            <Grid container spacing={1}>
              <Grid item xs={12} md={5}>
                <Stack
                  display={"flex"}
                  justifyContent={"start"}
                  alignItems={"center"}
                >
                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        fontSize: { xs: 24, lg: 40 },
                        fontWeight: { xs: "medium", md: 500 },
                        // color: "common.white",
                        textAlign: "left",
                        mt: 5,
                        // mb: 3,
                        maxWidth: 700
                      }}
                    >
                      GROW.
                    </Typography>
                  </m.div>
                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        fontSize: { xs: 24, lg: 40 },
                        fontWeight: { xs: "medium", md: 500 },
                        // color: "common.white",
                        textAlign: "left",
                        // mt: 3,
                        // mb: 3,
                        maxWidth: 700
                      }}
                    >
                      LEAD.
                    </Typography>
                  </m.div>
                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        fontSize: { xs: 24, lg: 40 },
                        fontWeight: { xs: "medium", md: 500 },
                        // color: "common.white",
                        textAlign: "center",
                        // mt: 3,
                        mb: 3,
                        maxWidth: 700
                      }}
                    >
                      THRIVE.
                    </Typography>
                  </m.div>
                </Stack>
              </Grid>
              <Box
                sx={{
                  width: { xs: 1.2, md: 1.5 }, // Thin vertical line
                  height: { xs: 40, md: 280 }, // Taller height for vertical orientation
                  bgcolor: "#060606",
                  mx: "auto",
                  // mt: 1,
                  mb: 3,
                  opacity: 0.5
                }}
              />

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: { xs: "center", md: "start" }
                }}
              >
                <Stack>
                  <m.div variants={varFade().inUp}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 500,
                        // color: "common.white",
                        textAlign: { xs: "center", md: "start" }
                        // mt: 3
                      }}
                    >
                      EMPOWERING SUSTAINABLE GROWTH
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inUp}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "regular",
                        // color: "common.white",
                        textAlign: { xs: "center", md: "start" },
                        mt: 3
                      }}
                    >
                      Vertria cultivates sustainable growth by empowering
                      entrepreneurs with immersive experiences, expert
                      mentorship, and actionable strategies for long-term
                      success
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inDown}>
                    <NextLink passHref href={PATH_PAGE.product}>
                      <Button
                        variant="outlined"
                        sx={{
                          width: { xs: "100%", sm: 200 },
                          height: 41,
                          position: "relative",
                          overflow: "hidden",
                          color: "#060606",
                          marginTop: 5,
                          marginBottom: 4,
                          border: "2px solid #060606",
                          borderRadius: 16,
                          transition:
                            "color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
                          "&:hover": {
                            color: "#fff",
                            border: "0px solid transparent",
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
                {/* <Divider sx={{ mt: 4, mb: 4 }} /> */}
              </Grid>
              <Box
                sx={{
                  width: { xs: 350, md: 1050 },
                  height: { md: "0.1px", xs: 1.2 },
                  bgcolor: "#060606",
                  mx: "auto",
                  mt: 1,
                  mb: 5,
                  opacity: 0.5
                }}
              />

              <Grid item xs={12} md={12}>
                <LearningFaqsList />
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </MotionContainer>
  );
}
