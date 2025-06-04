// @mui
import { styled } from "@mui/material/styles";
// layouts
import Layout from "../layouts";
// components
import Page from "../components/Page";
import { CommunityHero } from "@/sections/community";
// sections

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

CommunityPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CommunityPage() {
  return (
    <Page title="Community">
      <RootStyle>
        <CommunityHero />

        {/* <HomeStickySection /> */}

        {/* <ContentStyle>
          <HomeFaq />
        </ContentStyle> */}
      </RootStyle>
    </Page>
  );
}
