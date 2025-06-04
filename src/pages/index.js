// @mui
import { styled } from "@mui/material/styles";
// layouts
import Layout from "../layouts";
// components
import Page from "../components/Page";
// sections
import {
  HomeAbout,
  HomeHero,
  HomeServices,
  HomeStickySection,
  HomeTicker
} from "../sections/home";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%"
  // backgroundColor: "#1e1e1e"
}));

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home">
      <RootStyle>
        <HomeHero />

        {/* <HomeStickySection /> */}

        <ContentStyle>
          {/* <HomeTicker /> */}
          {/* <HomeAbout /> */}
          {/* <HomeServices /> */}
          {/* <HomeFaq /> */}
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
