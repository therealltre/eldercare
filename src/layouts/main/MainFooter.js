// next
import NextLink from "next/link";
// @mui
import { styled } from "@mui/material/styles";
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  Stack,
  TextField,
  Box,
  Button
} from "@mui/material";
// routes
import { PATH_PAGE } from "../../routes/paths";
// components
import SocialsButton from "../../components/SocialsButton";
import Image from "next/image";
import { Icon } from "@iconify/react";

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: "Quick Links",
    children: [
      { name: "Home", href: "/" }, //add href: to the after content received
      { name: "Services", href: PATH_PAGE.team },
      { name: "Career", href: PATH_PAGE.team }
      // { name: "Sponsorship", href: "/sponsorship" },
      // { name: "About Us", href: PATH_PAGE.team },
      // { name: "Learning", href: PATH_PAGE.learning },

      // { name: 'FAQs', href: PATH_PAGE.faqs },
    ]
  },
  {
    headline: "Company",
    children: [
      { name: "About Us", href: "#" },
      // { name: "Case Studies ", href: "#" },
      // { name: "Testimonials ", href: "#" },
      // { name: "Partners ", href: "#" },
      { name: "Schedule A Consultation ", href: "#" }
    ]
  },
  // {
  //   headline: "Support",
  //   children: [
  //     { name: "Contact Us", href: PATH_PAGE.contact },
  //     { name: "Schedula A Consultation ", href: "#" },

  //     // { name: "Testimonials ", href: "#" },
  //     // { name: "Partners ", href: "#" },
  //     { name: "FAQs", href: "#" }
  //   ]
  // },
  {
    headline: "Contact",
    children: [
      { name: "info@pojhomecare.com", href: PATH_PAGE.contact },
      { name: "Acworth, GA 30101", href: PATH_PAGE.contact }
    ]
  }
];

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  // backgroundColor: "#030A1B"
  // backgroundColor: "#421420"
  backgroundColor: theme.palette.primary.main
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      {/* <Divider /> */}
      <Container sx={{ pt: 10 }}>
        <NextLink href="/" passhref="true">
          <Image
            src="/assets/place-of-joy.svg"
            alt="brand name"
            width={120}
            height={120}
          />
        </NextLink>
        <Grid
          container
          justifyContent={{ xs: "start", md: "space-between" }}
          alignItems="start" // Align grid items at the top
          sx={{ textAlign: "left" }}
          spacing={4}
        >
          {/* Newsletter Section */}
          <Grid
            item
            xs={12}
            md={5}
            // sx={{ mb: 3 }}
          >
            <Typography
              variant="body2"
              sx={{ pr: { md: 5 }, color: "common.white", mt: 2 }}
            >
              <strong>Place of Joy Home Care Agency</strong> is a faith-driven
              home care agency providing compassionate, non-medical support that
              promotes independence, dignity, and peace of mind for families and
              their loved ones.
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ mt: 5 }}
            >
              <SocialsButton sx={{ mx: 0.5 }} />
            </Stack>

            <Typography sx={{ color: "common.white", mb: 2, mt: 2 }}>
              Office Hours: <br /> Monday - Friday - 9am-5pm <br />
              Saturday - 9am-1pm <br />
              Sunday - Closed
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={10}
              direction={{ xs: "row", md: "row" }}
              justifyContent="center"
            >
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={1}>
                  <Typography
                    component="p"
                    variant="overline"
                    sx={{ color: "common.white" }}
                  >
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <NextLink
                      key={link.name}
                      href={link.href}
                      passhref="true"
                      style={{ textDecoration: "none" }}
                    >
                      <Link
                        color="white"
                        variant="body2"
                        underline="none"
                        sx={{
                          display: "block",
                          textDecoration: "none",
                          "&:hover": {
                            color: "primary.dark" // Apply secondary.main on hover
                          }
                        }}
                      >
                        {link.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: "#B1D7D7" }} />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          gap={2}
          sx={{
            mt: 5,
            pb: 5,
            flexWrap: "wrap"
          }}
        >
          <Typography
            component="p"
            variant="body2"
            sx={{ fontSize: 13, color: "common.white" }}
          >
            All Rights Reserved © Place Of Joy Home Care Agency 2025
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Icon icon="eva:globe-fill" width={20} style={{ color: "#fff" }} />
            <Typography
              variant="body2"
              sx={{ fontSize: 13, color: "common.white" }}
            >
              USA
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Icon icon="eva:email-fill" width={20} style={{ color: "#fff" }} />
            <Typography
              variant="body2"
              sx={{ fontSize: 13, color: "common.white" }}
            >
              info@pojhomecare.com
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Icon icon="eva:phone-fill" width={20} style={{ color: "#fff" }} />
            <Link
              href="tel:+: 15713599918"
              underline="none"
              sx={{
                fontSize: 13,
                color: "common.white",
                "&:hover": {
                  color: "primary.dark",
                  textDecoration: "underline"
                }
              }}
            >
              +1 (571)-359-9918
            </Link>
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
