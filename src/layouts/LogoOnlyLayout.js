import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import Image from "next/image";
import NextLink from "next/link";
// ----------------------------------------------------------------------

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: "100%",
  position: "absolute",
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5, 5, 0)
  }
}));

// ----------------------------------------------------------------------

LogoOnlyLayout.propTypes = {
  children: PropTypes.node
};

export default function LogoOnlyLayout({ children }) {
  return (
    <>
      <HeaderStyle>
        <NextLink href="/" passhref="true">
          <Image
            src="/assets/place-of-joy.svg"
            alt="brand name"
            width={104}
            height={50}
          />
        </NextLink>
      </HeaderStyle>
      {children}
    </>
  );
}
