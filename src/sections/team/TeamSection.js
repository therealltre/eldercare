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
  Typography
} from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  // paddingBottom: theme.spacing(5),
  backgroundColor: theme.palette.background.default,
  //   backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(5)
  }
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
      padding: theme.spacing(5)
    }
  })
);

// ----------------------------------------------------------------------

export default function TeamSection() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <m.div variants={varFade().inUp}>
            <Typography
              component="div"
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: 400,
                fontFamily: '"Blair ITC", sans-serif'
              }}
            >
              WE ARE VERTRIA
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography
              variant="h6"
              fontWeight={"regular"}
              textTransform="uppercase"
              sx={{
                fontFamily: '"Blair ITC", sans-serif',
                fontWeight: 400,
                fontSize: { xs: 16, lg: 18 }
              }}
              //   sx={{ color: "common.white" }}
            >
              Our founders are passionate visionaries committed to empowering
              entrepreneurs and driving sustainable growth through mentorship,
              innovation, and purpose-driven leadership
            </Typography>
          </m.div>
        </Box>
      </Container>
    </RootStyle>
  );
}
