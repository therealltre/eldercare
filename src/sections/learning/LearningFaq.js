// @mui
import { Container, Grid, Box, Stack, Typography } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { useState } from "react";
import Iconify from "../../components/Iconify";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  backgroundColor: "#AEAEAE",

  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15)
  }
}));

// ----------------------------------------------------------------------

const _faqs = [
  {
    id: 1,
    value: "panel1",
    heading: "What kind of learning experience does Vertria offer?",
    detail:
      "Vertria combines immersive workshops, real-world business simulations, and personalized mentorship to provide a hands-on learning experience."
  },
  {
    id: 2,
    value: "panel2",
    heading: "How do I apply what I learn in the program?",
    detail:
      "The program includes a team-based business simulation where you apply concepts learned in the workshops to real-world scenarios. The concepts and skills are directly applied to their own business goals."
  },
  {
    id: 3,
    value: "panel3",
    heading: "Is the learning content tailored to different industries?",
    detail:
      "Yes, Vertria’s curriculum is designed to be flexible and applicable to a wide range of industries, allowing entrepreneurs to focus on their specific business needs."
  },
  {
    id: 4,
    value: "panel4",
    heading: "How does the program ensure learning after completion?",
    detail:
      "Participants gain six months of community access, where they can continue learning, networking, and collaborating with mentors and fellow entrepreneurs."
  }
];

// ----------------------------------------------------------------------

export default function LearningFaq() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                textAlign: "center",
                mb: { xs: 10, md: 10 }
              }}
            >
              <Stack direction={"column"} spacing={1}>
                <Typography variant="h2" sx={{ fontWeight: 500 }}>
                  Frequently Asked Questions
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            {_faqs.map((faq) => (
              <Accordion
                key={faq.id}
                expanded={expanded === faq.value}
                onChange={handleChange(faq.value)}
                sx={{
                  my: 3,
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
                  borderRadius: "8px",
                  "&:before": {
                    display: "none"
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<Iconify icon="akar-icons:chevron-down" />}
                  aria-controls={`${faq.value}-content`}
                  id={`${faq.value}-header`}
                >
                  <Typography>{faq.heading}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.detail}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
