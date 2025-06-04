import { m } from "framer-motion";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Stack,
  Typography
} from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionViewport, varFade } from "../../components/animate";
import { Icon } from "@iconify/react";
import NextLink from "next/link";
// ----------------------------------------------------------------------

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  backgroundColor: "#fff",

  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === "light"
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    // maxWidth: 365,
    width: "100%",
    height: "100%",
    minHeight: 200,
    margin: "auto",
    textAlign: "start",
    padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
    backgroundColor: "#181A20",
    color: "#fff",
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor: "#181A20",
      color: "#fff"
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
          backgroundColor: "#fff",
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

// ----------------------------------------------------------------------

export default function HomeAbout() {
  const theme = useTheme();

  const isLight = theme.palette.mode === "light";

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: "start",
            mb: { xs: 10, md: 5 }
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography
              component="div"
              variant="overline"
              sx={{ mb: 2, color: "text.disabled" }}
            >
              About Us
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Stack
              direction={"row"}
              spacing={1}
              sx={{ justifyContent: "start" }}
            >
              <Typography variant="h2">Why Place Of</Typography>
              <Typography
                variant="h2"
                sx={{
                  backgroundcolor: "primary",
                  backgroundImage: `linear-gradient(45deg, #FF8C42 , #02735E)`,
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 600
                }}
              >
                Joy Home Care?
              </Typography>
            </Stack>
          </m.div>

          <Grid container sx={{ mt: 2 }} spacing={2}>
            <Grid item xs={12} md={6}>
              <m.div variants={varFade().inLeft}>
                <Typography
                  // variant="h3" // Use a smaller typography variant
                  sx={{
                    fontSize: { xs: "28px", md: "34px" },
                    maxWidth: "550px",
                    fontWeight: "regular",
                    textAlign: "left",
                    lineHeight: 1.2
                  }}
                >
                  Place Of Joy Home Care Agency provides compassionate home care
                  that promotes independence and well-being.
                </Typography>
              </m.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <m.div variants={varFade().inRight}>
                <Typography
                  // variant="h3" // Use a smaller typography variant
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    maxWidth: "550px",
                    fontWeight: "regular",
                    textAlign: "left"
                    // lineHeight: 1.5 // Set a comfortable line height
                  }}
                >
                  Our mission is to to create a nurturing environment where
                  families find peace of mind, caregivers serve with excellence,
                  and every individual experiences the joy of compassionate
                  care.
                </Typography>
              </m.div>
            </Grid>
          </Grid>
          {/* <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}></Stack> */}
        </Box>

        {/* image card section  */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            borderRadius: 3,
            overflow: "hidden",
            // backgroundColor: "#fff",
            height: { xs: 500, md: 420 },
            mb: 10
          }}
        >
          {/* Background Image */}
          <m.div variants={varFade().inUp}>
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 1
              }}
            >
              <Image
                alt="About Background"
                src="/assets/home-about-img.jpg"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </m.div>

          {/* Content */}
          <Container
            sx={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              py: 2
            }}
          >
            {/* Left Content */}
            <m.div variants={varFade().inDown}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  maxWidth: { md: "50%" },
                  textAlign: "left",
                  p: 4, // Add some padding so content doesn't stick to edges
                  borderRadius: 2, // optional, to match card styles
                  zIndex: 2
                }}
              >
                {/* Team Images */}
                <Stack
                  direction="row"
                  spacing={-1}
                  sx={{
                    mt: { xs: 5, md: 0 },
                    mb: 5,
                    position: "relative",
                    alignItems: "flex-start"
                  }}
                >
                  {[
                    {
                      img: "https://framerusercontent.com/images/Sg5opI7jiM0rwN4xCc12B7gWjB8.jpg",
                      rotate: "2deg"
                    },
                    {
                      img: "https://framerusercontent.com/images/EqzeIaUVTCVsVQJ1sICFvccEd6U.jpg",
                      rotate: "-2deg"
                    },
                    {
                      img: "https://framerusercontent.com/images/BtAOJmxqRCHe9D1Xr6OjqkL9uLY.jpg",
                      rotate: "1deg"
                    }
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 70,
                        height: 80,
                        minWidth: 80,
                        minHeight: 80,
                        borderRadius: 2,
                        overflow: "hidden",
                        transform: `rotate(${item.rotate})`,
                        boxShadow: 3
                      }}
                    >
                      <Image
                        alt={`Team member ${index + 1}`}
                        src={item.img}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }}
                      />
                    </Box>
                  ))}
                </Stack>

                <m.div variants={varFade().inLeft}>
                  <Typography
                    variant="h5"
                    sx={{ mb: 3, fontWeight: "regular" }}
                  >
                    With a team of experienced professionals, we offer a variety
                    of services including in-home care, assisted living, memory
                    care, and hospice care.
                  </Typography>
                </m.div>

                <NextLink href="/about-us" passHref legacyBehavior>
                  <Button
                    variant="contained"
                    size="large"
                    // href={"/about-us"}
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      backgroundColor: theme.palette.primary.main,
                      color: "#fff",
                      marginTop: 5,
                      border: "2px solid transparent", // Ensures a default border is present
                      borderRadius: 1, // Border radius stays consistent
                      transition:
                        "color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
                      "&:hover": {
                        color: "#fff", // Text color changes to white on hover

                        borderRadius: 1, // Border radius stays consistent
                        backgroundColor: theme.palette.primary.dark, // Background changes to black
                        transform: "translateY(-5px)" // Moves the button up by 5px on hover
                      }
                    }}
                  >
                    About Place Of Joy
                  </Button>
                </NextLink>
              </Box>
            </m.div>
          </Container>
        </Box>
      </Container>
    </RootStyle>
  );
}
