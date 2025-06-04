import { useRouter } from "next/router";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Stack
} from "@mui/material";
import useOffSetTop from "../../hooks/useOffSetTop";
import useResponsive from "../../hooks/useResponsive";
import { HEADER } from "../../config";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";
import Image from "next/image";
import NextLink from "next/link";
import cssStyles from "@/utils/cssStyles";
import { Icon } from "@iconify/react";
import MuiLink from "@mui/material/Link"; // <-- MUI's Link

// Styled Components
const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up("md")]: {
    height: "94px"
  }
}));

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const theme = useTheme();
  const { pathname } = useRouter();
  const isDesktop = useResponsive("up", "md");
  const isHome = pathname === "/";

  // For mobile view, we need all navigation items
  const allNavItems = [...navConfig.left, ...navConfig.right];

  return (
    <AppBar sx={{ background: "transparent", boxShadow: "none" }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            backgroundColor: "inherit",
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT + 8 }
          })
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 2
          }}
        >
          {isDesktop ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              {/* Logo in Center */}
              {isOffset ? (
                <NextLink href="/" passHref legacyBehavior>
                  <Box
                    component="a"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mx: 2,
                      cursor: "pointer"
                    }}
                  >
                    <Image
                      src="/assets/place-of-joy.svg"
                      alt="place of Logo"
                      width={50}
                      height={50}
                      priority
                    />
                  </Box>
                </NextLink>
              ) : (
                <NextLink href="/" passHref legacyBehavior>
                  <Box
                    component="a"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mx: 2,
                      cursor: "pointer"
                    }}
                  >
                    <Image
                      src="/assets/place-of-joy.svg"
                      alt="place of joy Logo"
                      width={80}
                      height={80}
                      priority
                    />
                  </Box>
                </NextLink>
              )}

              {/* Left Navigation Items */}
              {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }}> */}
              <MenuDesktop
                isOffset={isOffset}
                isHome={isHome}
                navConfig={navConfig.left}
              />
              {/* </Box> */}

              {/* Right Navigation Items */}
              {/* <Box sx={{ display: "flex", justifyContent: "flex-start" }}> */}
              {/* <MenuDesktop
                  isOffset={isOffset}
                  isHome={isHome}
                  navConfig={navConfig.right}
                /> */}
              {/* </Box> */}

              {isOffset ? (
                <Box>
                  <Typography sx={{ color: "#060606" }}>
                    Have any questions?
                  </Typography>
                  <Stack direction="row" gap={2}>
                    <Typography sx={{ color: "#060606" }}>Call </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Icon
                        icon="eva:phone-fill"
                        width={20}
                        style={{ color: "#060606" }}
                      />
                      <NextLink href="tel:+15713599918" passHref legacyBehavior>
                        <MuiLink
                          underline="none"
                          sx={{
                            fontSize: 13,
                            color: "#060606", // <- Direct white color
                            typography: "body2",
                            "&:hover": {
                              color: "#B1D7D7",
                              textDecoration: "underline"
                            }
                          }}
                        >
                          +1 (571)-359-9918
                        </MuiLink>
                      </NextLink>
                    </Stack>
                  </Stack>
                </Box>
              ) : (
                <Box>
                  <Typography>Have any questions?</Typography>
                  <Stack direction="row" gap={2}>
                    <Typography>Call </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Icon
                        icon="eva:phone-fill"
                        width={20}
                        style={{ color: "#fff" }}
                      />
                      <NextLink href="tel:+15713599918" passHref legacyBehavior>
                        <MuiLink
                          underline="none"
                          sx={{
                            fontSize: 13,
                            color: "#fff", // <- Direct white color
                            typography: "body2",
                            "&:hover": {
                              color: "#B1D7D7",
                              textDecoration: "underline"
                            }
                          }}
                        >
                          +1 (571)-359-9918
                        </MuiLink>
                      </NextLink>
                    </Stack>
                  </Stack>
                </Box>
              )}
            </Box>
          ) : (
            <>
              {/* Mobile View */}
              <Box sx={{ flexGrow: 0.25 }} />

              {/* Centered Logo on Mobile */}
              <NextLink href="/" passHref legacyBehavior>
                <Box component="a">
                  <Image
                    src="/assets/place-of-joy.svg"
                    alt="place of joy Logo"
                    width={80}
                    height={80}
                    priority
                  />
                </Box>
              </NextLink>

              {/* Mobile Menu */}
              <MenuMobile
                isOffset={isOffset}
                isHome={isHome}
                navConfig={allNavItems}
              />
            </>
          )}
        </Container>
      </ToolbarStyle>
      {/* ✅ Divider is now BELOW all navigation items */}
    </AppBar>
  );
}
