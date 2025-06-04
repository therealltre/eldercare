import PropTypes from "prop-types";
import { m } from "framer-motion";
// @mui
import { alpha, styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Grid,
  Link,
  Paper,
  Rating,
  Container,
  Typography
} from "@mui/material";
// hooks
import useResponsive from "../../hooks/useResponsive";
// utils
import cssStyles from "../../utils/cssStyles";
// components
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: "Jenny Wilson",
    rating: 5,
    dateCreate: "April 19, 2021",
    content: `Excellent Work! Thanks a lot!`
  },
  {
    name: "Cody Fisher",
    rating: 5,
    dateCreate: "April 19, 2021",
    content: `It's a very good dashboard and we are really liking the product . We've done some things, like migrate to TS and implementing a react useContext api, to fit our job methodology but the product is one of the best in terms of design and application architecture. The team did a really good job.`
  },
  {
    name: "Marvin McKinney",
    rating: 5,
    dateCreate: "April 19, 2021",
    content: `Customer support is realy fast and helpful the desgin of this theme is looks amazing also the code is very clean and readble realy good job !`
  },
  {
    name: "Darrell Steward",
    rating: 5,
    dateCreate: "April 19, 2021",
    content: `Amazing, really good code quality and gives you a lot of examples for implementations.`
  },
  {
    name: "Jacob Jones",
    rating: 5,
    dateCreate: "April 19, 2021",
    content: `Got a few questions after purchasing the product. The owner responded very fast and very helpfull. Overall the code is excellent and works very good. 5/5 stars!`
  },
  {
    name: "Bessie Cooper",
    rating: 5,
    dateCreate: "April 19, 2021",
    content: `CEO of Codealy.io here. We’ve built a developer assessment platform that makes sense - tasks are based on git repositories and run in virtual machines. We automate the pain points - storing candidates code, running it and sharing test results with the whole team, remotely. Bought this template as we need to provide an awesome dashboard for our early customers. I am super happy with purchase. The code is just as good as the design. Thanks!`
  }
];

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(10, 0),
  backgroundSize: "cover",
  backgroundImage: `linear-gradient(to right, ${alpha(
    theme.palette.grey[900],
    0.8
  )} , ${alpha(
    theme.palette.grey[900],
    0.8
  )}), 
  url(/assets/images/about/testimonials.jpg)`,
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    padding: 0,
    height: 840,
    overflow: "hidden"
  }
}));

const tickerVariants = {
  animate: (direction) => ({
    y: [direction === "up" ? 0 : -100, direction === "up" ? -100 : 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear"
    }
  })
};
// ----------------------------------------------------------------------

export default function AboutTestimonials() {
  const isDesktop = useResponsive("up", "md");

  return (
    <RootStyle>
      <Container
        component={MotionViewport}
        sx={{ position: "relative", height: 1 }}
      >
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{ height: 1 }}
        >
          <Grid item xs={12} md={12}>
            <Box sx={{ maxWidth: { md: 360 } }}>
              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: "common.white" }}>
                  WHAT OTHERS ARE SAYING
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: "common.white" }} variant="body1">
                  Lorem ipsum dolor sit amet consectetur. Mi in maecenas sodales
                  velit molestie pharetra id consequat. Viverra bibendum id diam
                  id eu malesuada montes in dui. Lectus diam auctor donec
                  euismod semper. In tortor dictum sit cursus vulputate non.
                </Typography>
              </m.div>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            lg={6}
            sx={{
              right: { md: 24 },
              position: { md: "absolute" }
            }}
          >
            <Grid container spacing={isDesktop ? 3 : 0} alignItems="center">
              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                  <m.div
                    key={testimonial.name}
                    variants={tickerVariants}
                    animate="animate"
                    custom="up"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(3, 6).map((testimonial) => (
                  <m.div
                    key={testimonial.name}
                    variants={tickerVariants}
                    animate="animate"
                    custom="down"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    content: PropTypes.string,
    dateCreate: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number
  })
};

function TestimonialCard({ testimonial }) {
  const theme = useTheme();

  const { name, rating, dateCreate, content } = testimonial;

  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        color: "common.white",
        ...cssStyles().bgBlur({
          color: theme.palette.common.white,
          opacity: 0.04
        })
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>
      <Typography
        gutterBottom
        component="p"
        variant="caption"
        sx={{ color: "grey.500" }}
      >
        {dateCreate}
      </Typography>
      <Rating value={rating} readOnly size="small" />
      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}
