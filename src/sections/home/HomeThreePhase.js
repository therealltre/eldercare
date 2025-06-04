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
import SocialsButton from "./HomeSocialButton";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),

  backgroundColor: "#83173E",
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
      padding: theme.spacing(15)
    }
  })
);

// ----------------------------------------------------------------------

export default function HomeThreePhase() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <m.div variants={varFade().inUp}>
            <Typography
              component="div"
              variant="body2"
              sx={{ mb: 2, color: "common.white", fontWeight: 300, fontSize: 16 }}
            >
              Vertria’s Three-Phase Program
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography
              variant="h3"
              fontWeight={"regular"}
              sx={{ color: "common.white" }}
            >
              IMMERSIVE LEARNING, PERSONALIZED <br />
              GUIDANCE, LASTING IMPACT.
            </Typography>
          </m.div>
        </Box>
        {/* <Stack alignItems="center" spacing={5}>
          <Stack
            direction="row"
            justifyContent={{ xs: "center", md: "flex-start" }}
            sx={{ mt: 2, mb: 5 }}
          >
            <SocialsButton sx={{ mx: 0.5 }} />
          </Stack>
        </Stack> */}
      </Container>
    </RootStyle>
  );
}
