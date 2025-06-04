import { useState } from "react";
import { m } from "framer-motion";
import {
  Button,
  Typography,
  TextField,
  Stack,
  useTheme,
  CircularProgress
} from "@mui/material";
import { MotionViewport, varFade } from "../../components/animate";
import emailjs from "@emailjs/browser";
import { useSnackbar } from "notistack";
import ErrorIcon from "@mui/icons-material/Error";

export default function ContactForm() {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // <- Loading state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true); // <- Set loading to true

    const serviceID = "service_c2690hk";
    const templateID = "template_zinjpal";
    const publicKey = "bAq83aDMzIItkFIBC";

    const templateParams = {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      message: form.message
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        enqueueSnackbar("Message sent successfully!");
        setForm({
          fullName: "",
          email: "",
          phone: "",
          message: ""
        });
        setErrors({});
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        enqueueSnackbar("Failed to send message. Please try again later!", {
          variant: "error",
          icon: <ErrorIcon />
        });
      })
      .finally(() => {
        setLoading(false); // <- Reset loading state
      });
  };

  return (
    <Stack
      component={MotionViewport}
      spacing={5}
      sx={{ textAlign: "center", alignItems: "center", width: "100%" }}
    >
      <m.div variants={varFade().inUp}>
        <Typography variant="h3" sx={{ letterSpacing: 15, fontWeight: 500 }}>
          GET IN TOUCH
        </Typography>
      </m.div>

      <Stack spacing={3} width="100%" maxWidth={500}>
        {["fullName", "email", "phone", "message"].map((field, index) => (
          <m.div key={field} variants={varFade().inUp}>
            <TextField
              variant="standard"
              fullWidth
              label={
                field === "fullName"
                  ? "Full Name"
                  : field === "email"
                  ? "Enter Your Email"
                  : field === "phone"
                  ? "Enter Your Phone Number"
                  : "Enter your message here."
              }
              name={field}
              value={form[field]}
              onChange={handleChange}
              error={Boolean(errors[field])}
              helperText={errors[field]}
              multiline={field === "message"}
              rows={field === "message" ? 4 : undefined}
            />
          </m.div>
        ))}
      </Stack>

      <m.div variants={varFade().inUp}>
        <Button
          variant="contained"
          size="large"
          disabled={loading} // <- Disable button when loading
          onClick={handleSubmit}
          sx={{
            mt: 2,
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            transition: "transform 0.3s ease",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              transform: "translateY(-5px)"
            }
          }}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Submit Now"
          )}
        </Button>
      </m.div>
    </Stack>
  );
}
