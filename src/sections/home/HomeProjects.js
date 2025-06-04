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
import NextLink from "next/link";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
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
    // height: "100%",
    height: 280,
    margin: "auto",
    textAlign: "start",
    padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor: "#fff"
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


// Image Wrapper for overlay styling
const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(3),
  background: `linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)`,

  //   background: `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(
  //     theme.palette.grey[900],
  //     0
  //   )} 100%)`,

  color: theme.palette.common.white
}));

const CARDS = [
  {
    icon: "/assets/images/home/telos-x.png",
    title: "Telos",
    href: "https://telosx.net/",
    description:
      "The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects."
  },
  {
    icon: "/assets/images/home/bank-of-ghana.png",
    title: "Bank Of Ghana",
    href: "https://www.bog.gov.gh/wp-content/uploads/2024/08/Draft-Guidelines-on-Digital-Assets.pdf",
    description:
      "Easy to customize and extend each component, saving you time and money."
  },
  {
    icon: "/assets/images/home/gse.png",
    title: "Ghana Stock Exchange",
    href: "https://gse.com.gh/",
    description:
      "Consistent design in colors, fonts ... makes brand recognition easy."
  },
  {
    icon: "/assets/images/home/global_citizen.png",
    title: "Global Citizen",
    href: "https://www.globalcitizen.org/en/content/what-is-web-30-and-can-it-end-extreme-poverty/",
    description:
      "Consistent design in colors, fonts ... makes brand recognition easy."
  },

];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

// ----------------------------------------------------------------------

export default function HomeProjects() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "dark";

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: "start",
            mb: { xs: 10, md: 10 },
            backgroundImage: `url("/assets/images/home/african-warrior-drum.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right"
          }}
        >
          <m.div variants={varFade().inDown}>
            <Stack
              direction={"row"}
              spacing={1}
            // sx={{ justifyContent: "start" }}
            >
              <Typography variant="h2">Our</Typography>
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
                Partnerships
              </Typography>
            </Stack>
          </m.div>

        </Box>

        <Box
          sx={{
            display: "grid",
            gap: { xs: 4, md: 3 },
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              // lg: "repeat(3, 1fr)"
            }
          }}
        >
          {CARDS.map((card, index) => (
            <Grid item xs={12} lg={4} key={index}>
              <m.div variants={varFade().inUp}>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }} // Removes the default link underline
                >
                  <CardStyle
                    sx={{
                      padding: { xs: 3, md: 5 },
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)"
                      }
                    }}
                  >
                    <Image
                      src={card.icon}
                      alt={card.title}
                      sx={{
                        mb: 3,
                        width: 60,
                        height: 60,
                        filter: (theme) => shadowIcon(theme.palette.primary.main),
                        ...(index === 0 && { filter: (theme) => shadowIcon(theme.palette.info.main) }),
                        ...(index === 1 && { filter: (theme) => shadowIcon(theme.palette.error.main) })
                      }}
                    />
                    <Typography variant="h5" paragraph sx={{ textAlign: "start" }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", textAlign: "start" }}>
                      {card.description}
                    </Typography>
                  </CardStyle>
                </a>
              </m.div>
            </Grid>
          ))}

        </Box>

      </Container>
    </RootStyle>
  );
}
