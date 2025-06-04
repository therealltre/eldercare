import PropTypes from "prop-types";
import { m } from "framer-motion";
import { useRef } from "react";
import Slider from "react-slick";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Stack, Card, Button, Container, Typography } from "@mui/material";

// components
import Image from "../../components/Image";
import Iconify from "../../components/Iconify";
import { CarouselArrows } from "../../components/carousel";
import SocialsButton from "../../components/SocialsButton";
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------
const _carouselsMembers = [
  {
    id: "member-1",
    name: "Del Titus Bawuah ",
    role: "Chief Executive Officer",
    avatar: "/assets/images/about/Del.png"
  },
  {
    id: "member-2",
    name: "George Boateng ",
    role: "Chief Technical Officer ",
    avatar: "/assets/images/avatars/user-avatar2.jpg"
  },
  {
    id: "member-3",
    name: "Patrick Kingsley",
    role: "Chief Policy Office ",
    avatar: "/assets/images/about/Patrick.png"
  },
  {
    id: "member-4",
    name: "Chantel Bawuah ",
    role: "Chief of Staff ",
    avatar: "/assets/images/about/3.png"
  },
  {
    id: "member-5",
    name: "Maxwell Sarfo",
    role: "Executive(s) Assistant",
    avatar: "/assets/images/avatars/user-avatar.jpg"
  },
  {
    id: "member-6",
    name: "Baiden Bryan Ekow ",
    role: "Head of Communities",
    avatar: "/assets/images/about/Baiden.png"
  }
];

export default function AboutTeam() {
  const carouselRef = useRef(null);

  const theme = useTheme();

  const settings = {
    arrows: false,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: "0px",
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Container component={MotionViewport} sx={{ pb: 10, textAlign: "center" }}>

      <m.div variants={varFade().inDown}>
        <Typography
          component="p"
          variant="overline"
          sx={{ mb: 2, color: "text.secondary" }}
        >
          Dream team
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ justifyContent: "center" }}
        >
          <Typography variant="h2"> Great Team</Typography>
          <Typography
            variant="h2"
            sx={{
              backgroundcolor: "primary",
              backgroundImage: `linear-gradient(45deg, #FF8C42 , #02735E)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600
            }}
          >
            Is The Key
          </Typography>
        </Stack>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            mx: "auto",
            maxWidth: 630,
            color: (theme) =>
              theme.palette.mode === "light" ? "text.secondary" : "common.white"
          }}
        >
          vertria will provide you support if you have any problems, our
          support team will reply within a day and we also have detailed
          documentation.
        </Typography>
      </m.div>

      <Box sx={{ position: "relative" }}>
        <CarouselArrows filled onNext={handleNext} onPrevious={handlePrevious}>
          <Slider ref={carouselRef} {...settings}>
            {_carouselsMembers.map((member) => (
              <Box
                key={member.id}
                component={m.div}
                variants={varFade().in}
                sx={{ px: 1.5, py: 10 }}
              >
                <MemberCard member={member} />
              </Box>
            ))}
          </Slider>
        </CarouselArrows>
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

MemberCard.propTypes = {
  member: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string
  })
};

function MemberCard({ member }) {
  const { name, role, avatar } = member;

  return (
    <Card key={name} sx={{ p: 1 }}>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
        {role}
      </Typography>
      <Image alt={name} src={avatar} ratio="1/1" sx={{ borderRadius: 1.5, mb: 5 }} />
      {/* <Stack alignItems="center" sx={{ mt: 2, mb: 1 }}>
        <SocialsButton sx={{ color: "action.active" }} />
      </Stack> */}
    </Card>
  );
}
