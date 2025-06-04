import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

const scroll = keyframes`
  0% { transform: translateX(15%) }
  100% { transform: translateX(-100%) }
`;

const tickerMessages = [
  "Compassionate, high-quality home care rooted in dignity and respect.",
  "Personalized companion care, errands, and light housekeeping services.",
  "Your care, your voice, your way – always client-centered.",
  "Caregivers licensed, insured, and available 24/7.",
  "Founded by Winnie Kwarteng – over 15 years of home care experience.",
  "Specialized Alzheimer’s and dementia care for your loved ones.",
  "Respite care and personal assistance services under 21 also available.",
  "We treat every client like family – because to us, they are."
];

export default function HomeTicker() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: theme.palette.background.default,
        borderTop: "1px solid #fafafa",
        borderBottom: "1px solid #fafafa",
        py: 2
      }}
    >
      <Box
        component="div"
        sx={{
          display: "inline-block",
          animation: `${scroll} 120s linear infinite`,
          willChange: "transform"
        }}
      >
        {[...Array(5)].flatMap(() =>
          tickerMessages.map((msg, i) => (
            <Typography
              key={`${msg}-${i}-${Math.random()}`}
              component="span"
              sx={{
                display: "inline-block",
                mx: 4,
                fontSize: "1rem",
                color: "#444",
                fontWeight: 500
              }}
            >
              {msg}
            </Typography>
          ))
        )}
      </Box>
    </Box>
  );
}
