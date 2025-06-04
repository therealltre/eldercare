import { m } from "framer-motion";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  useMediaQuery,
  Button,
  Link,
  TextField
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import Image from "next/image";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  zIndex: 1,
  background: `linear-gradient(to bottom, ${theme.palette.primary.main}, #060606)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    alignItems: "center",
    height: "100vh"
  }
}));

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  width: "100%",
  height: "100%",
  objectfit: "conver",
  backgroundColor: "#060606"
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 2,
    maxWidth: 1440,
    margin: "auto",
    position: "relative",
    textAlign: "start",
    display: "flex",
    justifyContent: "start",
    padding: theme.spacing(15, 2),
    [theme.breakpoints.up("md")]: {
      textAlign: "start", // Center text for medium screens
      justifyContent: "center", // Center content horizontally
      alignItems: "center" // Center content vertically
      // padding: theme.spacing(15)
    }
  })
);

// ----------------------------------------------------------------------
const IMAGES = [
  {
    id: "image-1",
    avatar: "/assets/community-contact-left.png"
  },
  {
    id: "image-2",
    avatar: "/assets/community-contact-center.png"
  },
  {
    id: "image-3",
    avatar: "/assets/community-contact-right.png"
  }
];

export default function CommunityContact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MotionContainer>
      <RootStyle>
        <Container>
          <ContentStyle>
            <Grid container>
              <Grid item xs={12}>
                <Stack
                  spacing={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={-1}
                    mt={4}
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "auto"
                    }}
                  >
                    {IMAGES.map((image, index) => (
                      <Box
                        key={image.id}
                        sx={{
                          position: index === 1 ? "relative" : "absolute",
                          width: isMobile ? 220 : index === 1 ? 569 : 407,
                          height: isMobile ? 120 : index === 1 ? 317 : 242,
                          filter:
                            index === 1
                              ? "grayscale(100%)"
                              : "grayscale(100%) blur(2px)",
                          transition: "all 0.3s ease-in-out",
                          zIndex: index === 1 ? 2 : 1,
                          top: index === 1 ? "auto" : "50%",
                          left:
                            index === 1 ? "auto" : index === 0 ? "-5%" : "auto",
                          right: index === 2 ? "-5%" : "auto",
                          transform: index === 1 ? "none" : "translateY(-50%)"
                        }}
                      >
                        <Image
                          src={image.avatar}
                          alt={image.id}
                          layout="fill"
                          objectFit="cover"
                          style={{ borderRadius: 16 }}
                        />
                      </Box>
                    ))}
                  </Stack>

                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        fontSize: { xs: 24, lg: 42 },
                        color: "common.white",
                        textAlign: "center",
                        mt: 5
                      }}
                    >
                      Fuel Growth. Ignite Impact. Join Vertria.
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inUp}>
                    <Typography
                      variant="h6"
                      fontWeight={200}
                      sx={{
                        // fontSize: { xs: 16, lg: 24 },
                        color: "common.white",
                        textAlign: "center",
                        mt: 5,
                        maxWidth: 900
                      }}
                    >
                      At Vertria, we provide powerful, flexible solutions
                      designed to accelerate success. Step into an experience
                      where bold thinkers grow, lead, and give back. Through
                      mentorship, sponsorship, and a thriving community, we
                      transform dreams and ambition into action, knowledge into
                      impact, and success into opportunities for others.
                    </Typography>
                  </m.div>
                </Stack>

                {/* <Stack
                  spacing={2}
                  direction={{ xs: "column", md: "row" }}
                  justifyContent={"center"}
                  mt={4}
                >
                  <TextField
                    label="Your Email Address"
                    name="email"
                    sx={{
                      minWidth: 300,
                      borderRadius: 1,
                      backgroundColor: theme.palette.primary.main,
                      "& .MuiOutlinedInput-root": {
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "yellow" // Border color on hover
                        }
                      },
                      "& .MuiInputLabel-root": {
                        color: "gray" // Default label color
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "yellow" // Label color when focused
                      }
                    }}
                  />

                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#FFDC58",
                      color: "black",
                      border: "2px solid transparent",
                      "&:hover": {
                        border: "2px solid yellow"
                      },
                      "&:focus": {
                        border: "2px solid yellow"
                      }
                    }}
                  >
                    Contact Us
                  </Button>
                </Stack> */}
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </MotionContainer>
  );
}
