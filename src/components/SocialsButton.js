import PropTypes from "prop-types";
// @mui
import { alpha } from "@mui/material/styles";
import { Link, Stack, Button, Tooltip, IconButton } from "@mui/material";
import Iconify from "@/components/Iconify";
//

// ----------------------------------------------------------------------

SocialsButton.propTypes = {
  initialColor: PropTypes.bool,
  links: PropTypes.objectOf(PropTypes.string),
  simple: PropTypes.bool,
  sx: PropTypes.object
};

export default function SocialsButton({
  initialColor = false,
  simple = true,
  links = {},
  sx,
  ...other
}) {
  const SOCIALS = [
    // {
    //   name: "Mail",
    //   icon: "ic:outline-mail",
    //   socialColor: "#1877F2",
    //   path: links.contact || "mailto:letstalk@vertria.com"
    // },
    {
      name: "Instagram",
      icon: "ant-design:instagram-filled",
      socialColor: "#fff",
      path: links.instagram || "https://instagram.com/pojhomecare"
    },
    {
      name: "FaceBook",
      icon: "eva:facebook-fill",
      socialColor: "#1877F2",
      path: links.facebook || "https://www.facebook.com/pojhomecare/"
    },

    {
      name: "LinkedIn",
      icon: "icomoon-free:linkedin2",
      socialColor: "#fff",
      path:
        links.linkedin || "https://www.linkedin.com/company/pojhomecare.com/"
    }
    // {
    //   name: "Phone",
    //   icon: "ic:outline-phone",
    //   socialColor: "#fff",
    //   path: links.contact || "#"
    // }
  ];

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
      {SOCIALS.map((social) => {
        const { name, icon, path, socialColor } = social;
        return simple ? (
          <Link key={name} href={path}>
            <Tooltip title={name} placement="top">
              <IconButton
                color="#fff"
                // color="inherit"
                sx={{
                  // ...(initialColor && {
                  color: "#fff",
                  // color: socialColor,
                  "&:hover": {
                    bgcolor: alpha(socialColor, 0.08)
                  },
                  // }),
                  ...sx
                }}
                {...other}
              >
                <Iconify icon={icon} sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Tooltip>
          </Link>
        ) : (
          <Button
            key={name}
            href={path}
            color="inherit"
            variant="outlined"
            size="small"
            startIcon={<Iconify icon={icon} />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              ...(initialColor && {
                color: socialColor,
                borderColor: socialColor,
                "&:hover": {
                  borderColor: socialColor,
                  bgcolor: alpha(socialColor, 0.08)
                }
              }),
              ...sx
            }}
            {...other}
          >
            {name}
          </Button>
        );
      })}
    </Stack>
  );
}
