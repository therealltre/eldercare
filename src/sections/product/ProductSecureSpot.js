import { m } from "framer-motion";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Button,
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
import NextLink from "next/link";
import { PATH_PAGE } from "@/routes/paths";
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

export default function ProductSecureSpot() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <m.div variants={varFade().inUp}>
            <Typography
              component="div"
              //   variant="h4"
              sx={{
                mb: 2,
                fontSize: { xs: 16, lg: 36 },
                letterSpacing: 5,
                fontWeight: { xs: "medium", md: 400 }
              }}
            >
              SECURE YOUR SPOT – LIMITED AVAILABILITY!
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography
              variant="h4"
              fontWeight={"regular"}
              sx={{ fontSize: { xs: 16, lg: 20 } }}
            >
              We keep our cohorts small and powerful to ensure a high-impact
              experience. You can hold your spot today with a $5,000 deposit,
              but if another participant pays in full, you’ll have 48 hours to
              complete your payment before your spot is released.
            </Typography>
          </m.div>

          <m.div
            variants={varFade().inDown}
            // animate={{ y: [-20, 0, -20] }}
            // transition={{ duration: 4, repeat: Infinity }}
          >
            <NextLink passHref href={PATH_PAGE.contact}>
              <Button
                variant="contained"
                sx={{
                  width: 200,
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: theme.palette.primary.main,
                  color: "#fff",
                  marginTop: 8,
                  border: "10px solid transparent",
                  borderRadius: 16,
                  transition:
                    "color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: theme.palette.primary.dark,
                    transform: "translateY(-5px)"
                  }
                }}
              >
                SCHEDULE A CALL
              </Button>
            </NextLink>
          </m.div>
        </Box>
      </Container>
    </RootStyle>
  );
}
