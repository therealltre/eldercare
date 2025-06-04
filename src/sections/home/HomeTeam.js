import PropTypes from "prop-types";
import { m } from "framer-motion";
import { useRef } from "react";
import Slider from "react-slick";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import { Box, Stack, Card, Button, Container, Typography } from "@mui/material";

// components
import { CarouselArrows } from "../../components/carousel";
import { MotionViewport, varFade } from "../../components/animate";
import NextLink from "next/link";
import { PATH_PAGE } from "@/routes/paths";
// ----------------------------------------------------------------------
const RootStyle = styled(m.div)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  backgroundSize: "cover",
  backgroundPosition: "center",

  [theme.breakpoints.up("lg")]: {
    display: "flex",
    alignItems: "center",
    height: "100vh"
  }
}));

const _carouselsMembers = [
  {
    id: "member-1",
    name: "ALEC MILNE",
    role: "OWNER",
    avatar: "/assets/images/avatars/alec-milne-mentor1.png"
  },
  {
    id: "member-2",
    name: "VICTORIA RAISH",
    role: "OWNER/LEARNING",
    avatar: "/assets/images/avatars/victoria-raish-mentor.png"
  },
  {
    id: "member-3",
    name: "DR. HIBA KHALED",
    role: "OWNER/LEARNING",
    avatar: "/assets/images/team/dr.khaled.png"
  },
  {
    id: "member-4",
    name: "NICOLE BENNETT",
    role: "OWNER/SALES AND OPS",
    avatar: "/assets/images/avatars/nicole-bennett.png"
  },
  {
    id: "member-5",
    name: "MARIE FRASIER",
    role: "OWNER/LEARNING",
    avatar: "/assets/images/avatars/marie-frasier.png"
  },
  {
    id: "member-6",
    name: "DEL TITUS BAWUAH",
    role: "STRATEGIC PARTNERSHIPS",
    avatar: "/assets/images/team/del.png"
  }
];

export default function HomeTeam() {
  const carouselRef = useRef(null);

  const theme = useTheme();

  const settings = {
    arrows: false,
    slidesToShow: 3,
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
    <RootStyle>
      <Container component={MotionViewport} sx={{ pb: 5, textAlign: "center" }}>
        <Box sx={{ position: "relative" }}>
          <CarouselArrows
            filled
            onNext={handleNext}
            onPrevious={handlePrevious}
          >
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

        <m.div
          variants={varFade().inDown}
          // animate={{ y: [-20, 0, -20] }}
          // transition={{ duration: 4, repeat: Infinity }}
        >
          <NextLink passHref href={PATH_PAGE.team}>
            <Button
              variant="contained"
              sx={{
                width: 200,
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#FFDC58",
                // backgroundColor: theme.palette.primary.main,
                color: "#060606",
                marginTop: 2,
                border: "10px solid transparent",
                borderRadius: 16,
                transition:
                  "color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: theme.palette.primary.dark,
                  transform: "translateY(-5px)"
                }
              }}
            >
              MEET THE TEAM
            </Button>
          </NextLink>
        </m.div>
      </Container>
    </RootStyle>
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
    <Card
      key={name}
      sx={{
        position: "relative",
        width: "100%",
        height: 500, // Increased height
        borderRadius: 2,
        overflow: "hidden"
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${avatar})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) brightness(0.8)" // Converts to black & white and darkens slightly
        }}
      />

      {/* Text Container */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          p: 2,
          width: "100%",
          background: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          color: "white"
        }}
      >
        <Typography variant="body2">{role}</Typography>
        <Box sx={{ width: 150, height: 2, bgcolor: "yellow", my: 0.5 }} />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
      </Box>
    </Card>
  );
}
