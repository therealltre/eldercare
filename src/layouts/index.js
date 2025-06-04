import PropTypes from "prop-types";
// components
import MainLayout from "./main";
import LogoOnlyLayout from "./LogoOnlyLayout";

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["main", "logoOnly"])
};

export default function Layout({ variant = "main", children }) {
  if (variant === "logoOnly") {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }

  return <MainLayout> {children} </MainLayout>;
}
