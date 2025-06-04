// @mui
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";

import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------
const _faqs = [
  {
    id: 1,
    value: "panel1",
    heading: "How does the program help with practical experience?",
    detail:
      "The program features hands-on learning through a 6-week team-based business simulation, where you apply real-world entrepreneurial concepts. "
  },
  {
    id: 2,
    value: "panel2",
    heading: "What makes Vertria's mentorship unique?",
    detail:
      "Vertria offers personalized one-on-one mentorship tailored to each participant’s business needs, helping to drive growth and success. "
  },
  {
    id: 3,
    value: "panel3",
    heading: "What is the community access provided?",
    detail:
      " Participants receive six months of community access for continued learning, networking, and collaboration with fellow entrepreneurs and mentors. "
  },
  {
    id: 4,
    value: "panel7",
    heading: "Are there financial assistance options?",
    detail:
      "Yes, Vertria offers sponsorship programs to ensure its educational resources are available to a diverse range of entrepreneurs, regardless of financial background. "
  }
];

//----------------------------------------------------------------------
export default function FaqsList() {
  return (
    <>
      {_faqs.map((accordion) => (
        <Accordion
          key={accordion.id}
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
            expandIcon={
              <Iconify icon={"icon-park-outline:down"} width={20} height={20} />
            }
          >
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "start" }}>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
