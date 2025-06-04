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
    heading: " How do I secure my spot with Vertria?",
    detail:
      " To secure your spot, you can place a $5,000 deposit today. This will hold your place in our program. If another participant pays in full before you, we will notify you, and you’ll have 24 hours to complete your payment or your spot may be released. "
  },
  {
    id: 2,
    value: "panel2",
    heading: " Are there any financial aid or payment plans available?",
    detail:
      " Currently, we offer a $5,000 deposit to hold your spot. While full payment is required to complete the program, we suggest checking with our team about potential funding or financial aid opportunities that may be available to you. "
  },
  {
    id: 3,
    value: "panel3",
    heading:
      "Will travel and accommodations be covered for the in-person residency?",
    detail:
      " Participants are responsible for their own travel and accommodations. However, we may have recommendations or potential sponsorship options available. Please reach out to us for more details! "
  }
];

//----------------------------------------------------------------------
export default function ProductFaqsList() {
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
