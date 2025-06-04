import { useState } from "react";
import { Typography, TextField, Stack, FormControlLabel, Checkbox, Button } from "@mui/material";

// ----------------------------------------------------------------------

export default function PaymentBillingAddress() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Typography variant="subtitle1">Your Information</Typography>

      <Stack spacing={3} mt={5}>
        <TextField fullWidth label="Full Name" />
        <TextField fullWidth label="Phone number" />
        <TextField fullWidth label="Email" />
        
        {/* Terms and Privacy Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              color="primary"
            />
          }
          label={
            <Typography variant="body2">
              I accept Augment's{" "}
              <Typography component="span" color="primary" sx={{ textDecoration: "underline", cursor: "pointer" }}>
                terms
              </Typography>{" "}
              and{" "}
              <Typography component="span" color="primary" sx={{ textDecoration: "underline", cursor: "pointer" }}>
                privacy policy
              </Typography>
            </Typography>
          }
        />

        {/* Next Button */}
        <Button 
          variant="contained" 
          fullWidth 
          disabled={!checked} 
          sx={{ mt: 2 }}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
}
