import PropTypes from "prop-types";
import { m } from "framer-motion";
import { useRef } from "react";
import Slider from "react-slick";
import { useTheme, styled } from "@mui/material/styles";
import { Box, Card, Container, Typography, Grid } from "@mui/material";
import { CarouselArrows } from "../../components/carousel";
import { MotionViewport, varFade } from "../../components/animate";

const RootStyle = styled(m.div)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.default,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: theme.spacing(8, 2)
}));

const testimonials = [
  {
    id: "testimonial-1",
    description:
      "This platform has transformed my learning experience. The mentors are highly supportive!",
    name: "John Doe"
  },
  {
    id: "testimonial-2",
    description:
      "Vertria provided the guidance and resources I needed to scale my business sustainably. The expert mentorship.",
    name: "Jane Smith"
  },
  {
    id: "testimonial-3",
    description:
      "The lessons are well-structured, and the team is always available to help.",
    name: "Emily Johnson"
  },
  {
    id: "testimonial-4",
    description:
      "A truly fantastic experience! I have learned so much in such a short time.",
    name: "Michael Brown"
  }
];

export default function StudentTestimonials() {
  const carouselRef = useRef(null);
  const theme = useTheme();

  const settings = {
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "20px",
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [{ breakpoint: 960, settings: { slidesToShow: 1 } }]
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ textAlign: "center" }}>
        <m.div variants={varFade().inUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 5,
              fontWeight: 400,
              fontFamily: '"Blair ITC", sans-serif',
              fontSize: {xs: 24, lg: 36}
            }}
          >
            OUR PURPOSE & IMPACT
          </Typography>
          <Typography variant="body1" sx={{ mb: 5, maxWidth: 800, mx: "auto" }}>
            Entrepreneurial success isn't just about the individual—it's about
            building a lasting legacy. At Vertria, we believe in paying it
            forward, ensuring that the success of one entrepreneur leads to
            opportunities for many.
          </Typography>
        </m.div>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <m.div variants={varFade().in}>
              <Card
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: 3,
                  height: 200
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 2, fontFamily: '"Blair ITC", sans-serif' }}
                >
                  Alumni
                </Typography>
                <Typography variant="body1">
                  Alumni return as mentors, investors, and business leaders,
                  strengthening the same ecosystem that helped them grow.
                </Typography>
              </Card>
            </m.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <m.div variants={varFade().in}>
              <Card
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: 3,
                  height: 200
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 2, fontFamily: '"Blair ITC", sans-serif' }}
                >
                  Sponsorship
                </Typography>
                <Typography variant="body1">
                  Sponsorship programs empower future entrepreneurs, making
                  high-impact education accessible to diverse talent.
                </Typography>
              </Card>
            </m.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <m.div variants={varFade().in}>
              <Card
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: 3,
                  height: 200
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 2, fontFamily: '"Blair ITC", sans-serif' }}
                >
                  Community
                </Typography>
                <Typography variant="body1">
                  Our global community of mentors, investors, and entrepreneurs
                  fosters collaboration and continuous learning.
                </Typography>
              </Card>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
