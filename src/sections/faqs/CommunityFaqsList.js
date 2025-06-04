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
    heading: "How can I become a sponsor?",
    detail:
      " Becoming a sponsor is an opportunity to support the next generation of innovators. You can contribute through funding, resources, or partnership opportunities that help emerging entrepreneurs grow. To learn more about sponsorship options, benefits, and how to get involved, contact our team @ email. "
  },
  {
    id: 2,
    value: "panel2",
    heading: "How can I become a mentor?",
    detail:
      " If you’re an experienced entrepreneur, industry expert, or leader looking to give back, we’d love to have you as a mentor. Our mentorship program connects you with rising talent, providing guidance, insights, and support. Apply to become a mentor with our team @ email."
  },
  {
    id: 3,
    value: "panel3",
    heading:
      "Do I have to cover my own travel and accommodations for the in-person residency?",
    detail:
      "  Yes, participants are generally responsible for their own travel and accommodations  are covered during the in-person residency. However, there may be sponsorships or financial aid options available. We encourage you to check with our team for potential funding opportunities and if you are eligible."
  }
];

//----------------------------------------------------------------------
export default function CommunityFaqsList() {
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
