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
import { useState } from "react";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  //   paddingBottom: theme.spacing(15),
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
    height: 450,
    // height: 'auto',

    margin: "auto",
    textAlign: "start",
    padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
    display: "flex", // Add flex display
    flexDirection: "column", // Stack children vertically
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor: "#fff",
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


const CARDS = [
  {
    backgroundImage: "/assets/images/home/blockchain-development.svg",
    title: "Bridging the Knowledge Gap",
    href: "#1",
    description: {
      intro: "Web 3 technologies—blockchain, decentralized finance (DeFi), tokenization, and digital identity—offer Africa an unprecedented opportunity to leapfrog traditional financial and technological barriers. However, widespread adoption requires accessible, high-quality education that demystifies these innovations and showcases their real-world applications.",
      points: []
    }
  },
  {
    backgroundImage: "/assets/images/home/digital-assets.svg",
    title: "Our Approach",
    href: "#2",
    description: {
      intro: "We are committed to building a Web 3-literate continent through:",
      points: [
        "Workshops & Training Programs – Hands-on learning experiences tailored for entrepreneurs, developers, and creatives.",
        "Policy & Regulatory Awareness – Equipping governments and institutions with the insights to create progressive Web 3 policies.",
        "University & Institutional Partnerships – Integrating Web 3 education into curricula to foster the next generation of blockchain leaders.",
        "Public Engagement & Media Initiatives – Utilizing content, podcasts, and digital campaigns to inform and inspire communities."
      ]
    }
  },
  {
    backgroundImage: "/assets/images/home/blockchain-education.svg",
    title: "A Decentralized Future Starts with Knowledge",
    href: "#3",
    description: {
      intro: "We envision an Africa where Web 3 is not just understood, but actively harnessed to drive financial inclusion, innovation, and digital sovereignty. Through strategic education and awareness, we aim to bridge the gap between potential and impact, ensuring that Africa leads the charge in the decentralized revolution.",
      points: []
    }
  }
];



const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

// ----------------------------------------------------------------------


const CardContent = ({ card, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderDescription = () => {
    if (typeof card.description === "object" && card.description.points) {
      const pointsToShow = isExpanded
        ? card.description.points
        : card.description.points.slice(0, 2); // Show first two points when not expanded

      return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="body1" >
            {card.description.intro}
          </Typography>
          <Box sx={{ flex: 1 }}>
            <ul style={{ paddingLeft: "15px", marginTop: "8px" }}>
              {pointsToShow.map((point, idx) => (
                <li key={idx} style={{ marginBottom: "6px" }}>{point}</li>
              ))}
            </ul>
          </Box>
          {card.description.points.length > 2 && (
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              sx={{
                mt: 'auto', // Push button to bottom
                alignSelf: 'flex-start',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecoration: 'underline',
                }
              }}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </Button>
          )}
        </Box>
      );
    }
    return card.description

  };

  return (
    <Grid item xs={12} lg={4}>
      <m.div variants={varFade().inUp} > {/* Ensure animation wrapper is full height */}
        <CardStyle
          sx={{
            padding: { xs: 3, md: 5 },
            height: isExpanded ? 'auto' : 500, // Dynamic height when expanded
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              borderRadius: 2,
              transform: "translateY(-5px)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)"
            },
          }}
        >
          <Image
            src={card.backgroundImage}
            alt={card.title}
            sx={{
              mb: 3,
              width: 60,
              height: 60,
              filter: (theme) => shadowIcon(theme.palette.primary.main),
              ...(index === 0 && {
                filter: (theme) => shadowIcon(theme.palette.info.main)
              }),
              ...(index === 1 && {
                filter: (theme) => shadowIcon(theme.palette.error.main)
              })
            }}
          />
          <Typography variant="h5" paragraph sx={{ textAlign: "start" }}>
            {card.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              textAlign: "start",
              flex: 1, // Allow description to fill remaining space
            }}
          >
            {renderDescription()}
          </Typography>
        </CardStyle>
      </m.div>
    </Grid>
  );
};


export default function HomeEducation() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "dark";

  return (
    <RootStyle>
      <Container
        component={MotionViewport}
        sx={{
          textAlign: "start",
          mb: { xs: 10, md: 10 },
          backgroundImage: `url('/assets/images/home/african-woman-head.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "100%",
          backgroundPosition: "right"
        }}
      >
        <Box
          sx={{
            textAlign: "start",
            mb: { xs: 10, md: 10 }
          }}
        >
          <Box
            sx={{
              textAlign: "start",
              mb: { xs: 10, md: 10 }
            }}
          >
            <m.div variants={varFade().inDown}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={1}
              // sx={{ justifyContent: "start" }}
              >
                <Typography variant="h2">Education &</Typography>
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
                  Awareness
                </Typography>
              </Stack>
            </m.div>


            <m.div variants={varFade().inUp}>
              <Typography
                variant="body1"
                sx={{
                  width: { xs: "100%", md: "80%" }
                }}
              >
                Education is key to Web 3 adoption and digital transformation. We provide accessible, high
                quality training to ensure that businesses, entrepreneurs, developers, and policymakers
                understand and harness the power of blockchain.
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography
                variant="body1"
                sx={{
                  width: { xs: "100%", md: "80%", },
                  mt: 2
                }}
              >
                Join us in shaping an informed and empowered Web 3 Africa
              </Typography>
            </m.div>

          </Box>
        </Box>


        <Box
          sx={{
            display: "grid",
            gap: { xs: 4, md: 3 },
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(1, 1fr)",
              lg: "repeat(3, 1fr)"
            },
            alignItems: "start" // This ensures cards start from the top

          }}
        >
          {CARDS.map((card, index) => (
            <CardContent key={index} card={card} index={index} />
          ))}
        </Box>

      </Container>
    </RootStyle>
  );
}
