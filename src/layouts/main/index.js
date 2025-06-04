import PropTypes from "prop-types";

// @mui
import { Box, Stack } from "@mui/material";
// components
// import Logo from '../../components/Logo';
//
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import { useRouter } from "next/navigation";
// import { HomeSocials } from "@/sections/home";

// ----------------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default function MainLayout({ children }) {
  const { pathname } = useRouter();

  const isHome = pathname === "/";

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      {children}

      <Box sx={{ flexGrow: 1 }} />

      {/* <HomeSocials /> */}

      <MainFooter />

      {/* {!isHome ? (

        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default',
          }}
        >
          <Container>
            <Image
              src="/assets/images/brand/w3a-logo.png"
              alt="brand name"
              width={324}
              height={140}
            />

            <Typography variant="caption" component="p">
              © All rights reserved &nbsp;
              <Link href="#">BoilerPlate</Link>
            </Typography>
          </Container>
        </Box>
      )} */}
    </Stack>
  );
}
