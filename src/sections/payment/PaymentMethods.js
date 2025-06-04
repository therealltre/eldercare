import { useState } from "react";
// @mui
import { styled } from "@mui/material/styles";
import {
  Stack,
  Paper,
  Radio,
  Button,
  Grid,
  Typography,
  RadioGroup
} from "@mui/material";
// components
import Image from "../../components/Image";

// ----------------------------------------------------------------------

const PAYMENT_OPTIONS = [
  {
    value: "google_pay",
    title: "Google Pay",
    icons: ["/assets/icons/ic_gpay.svg"]
  },
  {
    value: "paypal",
    title: "PayPal",
    icons: ["/assets/icons/ic_paypal1.svg"]
  },
  {
    value: "apple_pay",
    title: "Apple Pay",
    icons: ["/assets/icons/ic_applepay.svg"]
  },
  {
    value: "credit_card",
    title: "Credit / Debit Card",
    icons: ["/assets/icons/ic_card.svg"]
  }
];

const OptionStyle = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%", // Ensures all cards have the same width
  height: 150, // Consistent height for all options
  padding: theme.spacing(2),
  textAlign: "center",
  transition: theme.transitions.create("all"),
  border: `solid 1px ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius * 1.5,
  cursor: "pointer",
  boxShadow: "none",
  "&:hover": {
    boxShadow: theme.shadows[3]
  },
  position: "relative"
}));

const StyledRadio = styled(Radio)(({ theme }) => ({
  position: "absolute",
  bottom: 8,
  right: 8
}));

const IconWrapper = styled("div")({
  width: 80,
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

// ----------------------------------------------------------------------

export default function PaymentMethods() {
  const [method, setMethod] = useState("paypal");

  const handleChangeMethod = (event) => {
    setMethod(event.target.value);
  };

  return (
    <div>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        Payment Options
      </Typography>

      <RadioGroup value={method} onChange={handleChangeMethod}>
        <Grid container spacing={2}>
          {PAYMENT_OPTIONS.map((option) => {
            const { value, title, icons } = option;
            const isSelected = method === value;

            return (
              <Grid item xs={12} sm={6} key={value}>
                <OptionStyle
                  sx={{
                    border: isSelected ? "2px solid #1976d2" : "1px solid #ddd",
                    boxShadow: isSelected
                      ? "0 4px 12px rgba(25, 118, 210, 0.2)"
                      : "none"
                  }}
                >
                  <IconWrapper>
                    {icons.map((icon) => (
                      <Image
                        key={icon}
                        alt={title}
                        src={icon}
                        width={80}
                        height={50}
                      />
                    ))}
                  </IconWrapper>

                  <StyledRadio value={value} />
                </OptionStyle>
              </Grid>
            );
          })}
        </Grid>

        <Button variant="contained" fullWidth sx={{ mt: 5 }}>
          Next
        </Button>
      </RadioGroup>
    </div>
  );
}
