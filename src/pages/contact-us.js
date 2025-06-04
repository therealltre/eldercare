// @mui
import { styled } from "@mui/material/styles";
import { Grid, Container, Typography, Stack } from "@mui/material";
// layouts
import Layout from "../layouts";
// components
import Page from "../components/Page";
// sections
import { ContactHero, ContactForm } from "../sections/contact";


// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%"
  // backgroundColor: "#1e1e1e"
}));

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

Contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <Page title="Contact Us">
      <RootStyle>
        <ContactHero />

        <Container sx={{ my: 10 }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center" // Center the grid items horizontally
            }}
          >
            {/* <Grid item xs={12} md={12}>
              <Stack spacing={4}>
                <m.div variants={varFade().inUp}>
                  <Typography
                    variant="h3"
                    sx={{ letterSpacing: 15, fontWeight: 500 }}
                  >
                    GET IN TOUCH
                  </Typography>
                </m.div>
                <m.div variants={varFade().inDown}>
                  <Typography variant="h6" sx={{ fontWeight: "regular" }}>
                    We’re here to empower you with the tools, mentorship, and
                    support needed to unlock your full potential and drive
                    sustainable success. Reach out today!{" "}
                  </Typography>
                </m.div>
              </Stack>
            </Grid> */}
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
