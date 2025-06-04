import { m } from "framer-motion";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15),
  },
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
    padding: theme.spacing(10, 2),
    [theme.breakpoints.up("md")]: {
      textAlign: "start",
      padding: theme.spacing(15),
    },
  })
);

// ----------------------------------------------------------------------

export default function HomeAd() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Stack
          direction={{ xs: "column", md: "row" }} // Column on small screens, Row on large screens
          alignItems="start"
          spacing={5}
        >
          {/* Left Content */}
          <Box sx={{ flex: 1 }}>
            <m.div variants={varFade().inUp}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: 24, lg: 50 },
                  color: "common.white",
                  mb: 1,
                }}
              >
                A DYNAMIC MENTORSHIP
              </Typography>
            </m.div>
          </Box>

          {/* Right Image (Optional: Add Image Here) */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Image
              src="/assets/images/about/mentorship.png" // Change to your actual image path
              alt="Mentorship"
              sx={{
                width: { xs: "100%", md: "80%" },
                maxHeight: 400,
                borderRadius: 2,
              }}
            /> */}
            <m.div variants={varFade().inUp}>
              <Typography
                variant="body1"
                sx={{
                  color: "common.white",
                  maxWidth: 600,
                  fontSize: { xs: 18, lg: 24 },
                  mb: { xs: 10, lg: 4 },
                }}
              >
                We empower individuals to transform their ideas into thriving
                businesses by providing the tools, network, and real-world
                expertise needed to succeed in an evolving global economy.
              </Typography>
            </m.div>
          </Box>
        </Stack>
      </Container>
    </RootStyle>
  );
}
