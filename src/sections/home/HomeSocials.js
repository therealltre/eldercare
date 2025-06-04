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

  backgroundColor: "#83173B",
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

export default function HomeSocials() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Stack alignItems="center" spacing={5}>
          <Stack
            direction="row"
            justifyContent={{ xs: "center", md: "flex-start" }}
            sx={{ mt: 2, mb: 5 }}
          >
            <SocialsButton sx={{ mx: 0.5 }} />
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
