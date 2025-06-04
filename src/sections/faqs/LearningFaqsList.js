// @mui
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";

import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
const _faqs = [
  {
    id: 1,
    value: "panel1",
    heading: "IN-PERSON EXPERIENCE",
    detail:
      "Vertria provides immersive in-person workshops and events designed to create meaningful connections and foster hands-on learning experiences."
  },
  {
    id: 2,
    value: "panel2",
    heading: "INTERACTIVE MENTORSHIP",
    detail:
      "Our expert mentors provide personalized guidance and actionable strategies tailored to your specific business needs and growth objectives."
  },
  {
    id: 3,
    value: "panel3",
    heading: "REAL LIFE SIMULATION",
    detail:
      "Apply concepts in practical business simulations that mirror real-world challenges, helping you develop problem-solving skills and strategic thinking."
  }
];

//----------------------------------------------------------------------
export default function LearningFaqsList() {
  return (
    <>
      {_faqs.map((accordion) => (
        <Accordion
          key={accordion.id}
          sx={{
            my: 3,
            backgroundColor: '#ffffff',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
            borderRadius: '8px',
            '&:before': {
              display: 'none',
            }
          }}
        >
          <AccordionSummary
            expandIcon={
              <Iconify icon={"icon-park-outline:down"} width={20} height={20} />
            }
            sx={{ height: 64 }}
          >
            <Typography sx={{ color: '#9e9e9e', mr: 2, fontSize: '24px', fontWeight: 'light' }}>
              {`0${accordion.id}`}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {accordion.heading}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: 'start', px: 4, pb: 3 }}>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
