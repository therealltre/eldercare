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
  Divider,
  Card
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import Image from "next/image";
import NextLink from "next/link";
import { LearningFaqsList } from "../faqs";
import { PATH_PAGE } from "@/routes/paths";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  //   paddingTop: theme.spacing(0),
  //   paddingBottom: theme.spacing(10),
  background: theme.palette.background.default,

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
  backgroundColor: theme.palette.background.default
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
      padding: theme.spacing(4, 2)
    }
  })
);

// ----------------------------------------------------------------------

export default function ProductApplyNow() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MotionContainer>
      <RootStyle>
        {/* <Container> */}
        <ContentStyle>
          <Card
            sx={{
              p: 4,
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff"
            }}
          >
            <Grid
              container
              spacing={1}
              sx={{
                display: "flex",
                //   justifyContent: "center",
                alignItems: "center",
                textAlign: { xs: "center", md: "center" }
              }}
            >
              <Grid
                item
                xs={12}
                md={8}
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
                      variant="h3"
                      sx={{
                        fontWeight: 500,
                        //   color: "common.white",
                        textAlign: { xs: "center", md: "start" },
                        mt: 3
                      }}
                    >
                      Your Next Step Starts Now
                    </Typography>
                  </m.div>
                  <m.div variants={varFade().inUp}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        //   color: "common.white",
                        textAlign: { xs: "center", md: "start" },
                        mt: 3
                      }}
                    >
                      Opportunities like this don’t wait. Take action today and
                      step into the Vertria experience.
                    </Typography>
                  </m.div>

                  <Divider sx={{ mt: 4, mb: 4, backgroundColor: "#060606" }} />
                </Stack>
              </Grid>

              <Grid item xs={12} md={4}>
                <m.div variants={varFade().inDown}>
                  <NextLink passHref href={PATH_PAGE.contact}>
                    <Button
                      variant="outlined"
                      sx={{
                        width: { xs: "100%", sm: 200 },
                        height: 54,
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "#FFDC58",

                        color: "#060606",
                        marginTop: 2,
                        marginBottom: 4,
                        border: "0px solid #fff",
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
                      APPLY NOW
                    </Button>
                  </NextLink>
                </m.div>
                <m.div variants={varFade().inDown}>
                  <NextLink passHref href={PATH_PAGE.contact}>
                    <Button
                      variant="outlined"
                      sx={{
                        width: { xs: "100%", sm: 200 },
                        height: 54,
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "#fff",

                        color: "#060606",
                        marginTop: 2,
                        marginBottom: 4,
                        border: "1px solid #060606",
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
                      HOLD YOUR SPOT
                    </Button>
                  </NextLink>
                </m.div>
              </Grid>
            </Grid>
          </Card>
        </ContentStyle>
        {/* </Container> */}
      </RootStyle>
    </MotionContainer>
  );
}
