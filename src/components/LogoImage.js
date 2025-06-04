import PropTypes from "prop-types";
import { forwardRef } from "react";
import NextLink from "next/link";
// @mui
import { Box } from "@mui/material";
import Image from "next/image";

// ----------------------------------------------------------------------

const LogoImage = forwardRef(({ disabledLink = false, sx }, ref) => {
  const logoImg = (
    <Box ref={ref} sx={{ width: 80, height: 80, cursor: "pointer", ...sx }}>
      <NextLink href="/" passhref="true">
        <Image
          src="/assets/place-of-joy.png"
          alt="Home"
          width={80} // specify width
          height={80} // specify height
          priority // ensures the image is loaded quickly
        />
      </NextLink>
    </Box>
  );

  if (disabledLink) {
    return <>{logoImg}</>;
  }

  return <NextLink href="/">{logoImg}</NextLink>;
});

LogoImage.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object
};

export default LogoImage;
