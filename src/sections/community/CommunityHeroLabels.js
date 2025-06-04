import { m } from "framer-motion";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography
} from "@mui/material";
// components
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  backgroundColor: "#EBEBEB",
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(5)
  }
}));

const labels = [
  "Entrepreneurship",
  "Innovation & Tech",
  "Mentorship",
  "Sponsorship & Partnerships",
  "Community & Government",
  "Dream Big",
  "Leadership",
  "Business Mastery",
  "Collaboration",
  "Legacy & Impact"
];

// ----------------------------------------------------------------------

export default function CommunityHeroLabels() {
  const theme = useTheme();
  
  // Split labels into two rows
  const topLabels = labels.slice(0, 5);
  const bottomLabels = labels.slice(5);

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box sx={{ mb: 2 }}>
          {/* Top row */}
          <Grid
            container
            spacing={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {topLabels.map((label, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={2.35}
                key={index}
              >
                <m.div variants={varFade().inUp} style={{ width: '100%' }}>
                  <Card
                    sx={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      width: "100%"
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: theme.palette.background.paper,
                        padding: theme.spacing(1, 1),
                        borderRadius: 1.5,
                        minHeight: "unset",
                        width: "100%",
                        "&:hover": {
                          backgroundColor: theme.palette.grey[300],
                          transform: "scale(1.05)"
                        },
                        "&:last-child": { paddingBottom: theme.spacing(1) }
                      }}
                    >
                      <Typography variant="body2" fontWeight={"medium"} noWrap>
                        {label}
                      </Typography>
                    </CardContent>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          {/* Bottom row */}
          <Grid
            container
            spacing={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {bottomLabels.map((label, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={2.35}
                key={index}
              >
                <m.div variants={varFade().inUp} style={{ width: '100%' }}>
                  <Card
                    sx={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      width: "100%"
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: theme.palette.background.paper,
                        padding: theme.spacing(1, 1),
                        borderRadius: 1.5,
                        minHeight: "unset",
                        width: "100%",
                        "&:hover": {
                          backgroundColor: theme.palette.grey[300],
                          transform: "scale(1.05)"
                        },
                        "&:last-child": { paddingBottom: theme.spacing(1) }
                      }}
                    >
                      <Typography variant="body2" fontWeight={"medium"} noWrap>
                        {label}
                      </Typography>
                    </CardContent>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </RootStyle>
  );
}