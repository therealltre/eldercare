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
import { useState } from "react";
// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15)
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(10)
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

export default function HomeServices() {
  const theme = useTheme();

  const [cardOrder, setCardOrder] = useState([0, 1, 2]);

  const bringToFront = (index) => {
    setCardOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const idx = newOrder.indexOf(index);
      newOrder.splice(idx, 1);
      newOrder.push(index);
      return newOrder;
    });
  };

  const services = [
    {
      title: "Companion Care / Sitter Services",
      description:
        "Offering companionship, assistance with errands, light housekeeping, Alzheimer's and dementia care, and more to ensure safety and emotional support at home.",
      image:
        "https://images.pexels.com/photos/7551675/pexels-photo-7551675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500"
    },
    {
      title: "Personal Care",
      description:
        "Hands-on support with bathing, grooming, dressing, hygiene, medication reminders, and meal preparation to help clients stay comfortable and independent.",
      image:
        "https://images.pexels.com/photos/6520611/pexels-photo-6520611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500"
    },
    {
      title: "Respite Care (Under 21)",
      description:
        "Temporary care solutions for families needing a break from caregiving duties. Safe, flexible support for children and teens under 21.",
      image:
        "https://images.pexels.com/photos/7551678/pexels-photo-7551678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500"
    }
  ];

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 10, md: 10 }
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography
              component="div"
              variant="overline"
              sx={{ mb: 2, color: "text.disabled" }}
            >
              Services
            </Typography>
          </m.div>

          <Grid container sx={{ mt: 2 }} spacing={2}>
            <Grid item xs={12} md={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <m.div variants={varFade().inDown}>
                  <Typography
                    // variant="h3" // Use a smaller typography variant
                    sx={{
                      fontSize: { xs: "28px", md: "36px" },
                      fontWeight: 400,
                      maxWidth: "600px",
                      fontWeight: "regular",
                      textAlign: "center"
                      // lineHeight: 1.5 // Set a comfortable line height
                    }}
                  >
                    Services tailored to meet the unique needs of each senior.{" "}
                  </Typography>
                </m.div>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <m.div variants={varFade().inDown}>
                  <Typography
                    // variant="h3" // Use a smaller typography variant
                    sx={{
                      fontSize: { xs: "16px", md: "20px" },
                      maxWidth: "600px",
                      fontWeight: "regular",
                      textAlign: "center"
                      // lineHeight: 1.5 // Set a comfortable line height
                    }}
                  >
                    Our experienced team is dedicated to providing compassionate
                    care that promotes comfort, dignity, and independence.
                  </Typography>
                </m.div>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* image card section  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              width: { xs: 400, md: 600 },
              height: { xs: 260, md: 300 },
              mt: { xs: 5, md: 0 },
              mb: 10
            }}
          >
            {cardOrder.map((cardIndex, stackPosition) => {
              const service = services[cardIndex];
              const zIndex = 10 + stackPosition;
              const offsetY = stackPosition * 35;
              const scale = 1 - (2 - stackPosition) * 0.03;

              return (
                <m.div
                  key={cardIndex}
                  onClick={() => bringToFront(cardIndex)}
                  animate={{
                    scale,
                    y: offsetY,
                    zIndex,
                    position: "absolute",
                    top: 0,
                    left: 0
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#fff",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "16px",
                    gap: "16px"
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ mb: 1, color: "#000" }}>
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.4,
                        fontSize: "0.875rem"
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: { xs: 150, md: 300 },
                      height: 200,
                      borderRadius: 2,
                      overflow: "hidden",
                      flexShrink: 0
                    }}
                  >
                    <Image
                      alt={service.title}
                      src={service.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </Box>
                </m.div>
              );
            })}
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
          <NextLink href="/services" passHref legacyBehavior>
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
              Read More
            </Button>
          </NextLink>
        </Box>
      </Container>
    </RootStyle>
  );
}
