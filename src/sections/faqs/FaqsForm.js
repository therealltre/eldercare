import { useState } from "react";
import { m } from "framer-motion";
import { Button, Typography, TextField, Stack, Alert, CircularProgress } from "@mui/material";
import emailjs from "@emailjs/browser"; // Use the updated package
import { varFade, MotionViewport } from "../../components/animate";

export default function FaqsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Form submitted with data:", formData);

    const serviceID = "#";
    const templateID = "#";
    const publicKey = "#";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setFeedback("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setFeedback("Something went wrong. Please try again later.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <MotionViewport>
      <Stack spacing={3} component="form" onSubmit={handleSubmit}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h4">Haven't found the right help?</Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField
            fullWidth
            label="Enter your message here."
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </m.div>

        <m.div variants={varFade().inUp}>
          <Button
            size="large"
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            startIcon={isSubmitting && <CircularProgress size={20} color="inherit" />}
          >
            {isSubmitting ? "Submitting..." : "Submit Now"}
          </Button>
        </m.div>

        {feedback && (
          <m.div variants={varFade().inUp}>
            <Alert severity={feedback.includes("successfully") ? "success" : "error"}>
              {feedback}
            </Alert>
          </m.div>
        )}
      </Stack>
    </MotionViewport>
  );
}
