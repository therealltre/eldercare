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
  paddingBottom: theme.spacing(15),
  backgroundColor: theme.palette.background.paper,
  //   backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15)
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
const _journey = [
  {
    title: "T-3 to T-1 | Vertria Vantage",
    description:
      "Learners complete expert-designed self-assessments and receive curated learning materials, while mentors undergo matching assessments to ensure a tailored, high-impact experience."
  },
  {
    title: "T-1 to T-0 | Vertria Welcome",
    description:
      " Engaging events, webinars, and mentor matching set the stage for a seamless and energizing in-person experience."
  },
  {
    title: "T-0 | Launch Vertria Embark",
    description:
      " A transformative 3-day in-person residency where founders refine their mindset, master durable skills, and develop a structured business blueprint to accelerate their entrepreneurial journey."
  },
  {
    title: "Vertria Mentors",
    description:
      "Post-Embark, entrepreneurs engage in a two-week mentorship, refining their business with expert guidance, personalized resources, and strategic support to develop their MVP."
  },
  {
    title: "Vertria Immersion",
    description:
      "Entrepreneurs deepen mentorship, refine their pitch deck, and collaborate in a high-stakes simulation to apply real-world business strategies in an immersive environment."
  },
  {
    title: "Vertria Pitch",
    description:
      " A low-stakes, high-value pitch experience where entrepreneurs receive expert feedback to refine their presentations for real-world success."
  }
];
export default function LearningJourney() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <m.div variants={varFade().inUp}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "medium",
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: '"Blair ITC", sans-serif',
              }}
            >
              THE JOURNEY
            </Typography>
          </m.div>
          {/* <m.div variants={varFade().inDown}>
            <Typography
              variant="h3"
              fontWeight={"regular"}
              //   sx={{ color: "common.white" }}
            >
              ALL YOUR RESOURCES IN ONE PLACE
            </Typography>
          </m.div> */}
        </Box>

        <Grid container spacing={4}>
          {_journey.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: "100%", boxShadow: "none" }}>
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
