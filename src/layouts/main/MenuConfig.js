import { PATH_PAGE } from "../../routes/paths";
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 24,
  height: 24
};

const menuConfig = {
  left: [
    {
      title: "HOME",
      icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
      path: "/"
    },
    {
      title: "SERVICES",
      icon: (
        <Iconify icon={"streamline:global-learning-solid"} {...ICON_SIZE} />
      ),
      path: PATH_PAGE.learning
    },
    {
      title: "CAREER",
      icon: (
        <Iconify icon={"fluent:people-community-24-filled"} {...ICON_SIZE} />
      ),
      path: PATH_PAGE.community
    },
    {
      title: "ABOUT US",
      icon: (
        <Iconify icon={"fluent:people-team-toolbox-20-filled"} {...ICON_SIZE} />
      ),
      path: PATH_PAGE.team
    },
    {
      title: "CONTACT US",
      icon: <Iconify icon={"ic:baseline-contact-page"} {...ICON_SIZE} />,
      path: PATH_PAGE.contact
    }
  ],

  // put all the nav heres and add the contact info to the left
  right: [
    // {
    //   title: "ABOUT US",
    //   icon: (
    //     <Iconify icon={"fluent:people-team-toolbox-20-filled"} {...ICON_SIZE} />
    //   ),
    //   path: PATH_PAGE.team
    // },
    // {
    //   title: "CONTACT US",
    //   icon: <Iconify icon={"ic:baseline-contact-page"} {...ICON_SIZE} />,
    //   path: PATH_PAGE.contact
    // }
    // {
    //   title: "JOIN US",
    //   icon: <Iconify icon={"ph:tote-fill"} {...ICON_SIZE} />,
    //   path: PATH_PAGE.product
    // }
    // If you uncomment ABOUT US, you can add it here or in the left array
    // {
    //   title: "ABOUT US",
    //   icon: <Iconify icon={"solar:notebook-bold"} {...ICON_SIZE} />,
    //   path: PATH_PAGE.about
    // },
  ]
};

export default menuConfig;
