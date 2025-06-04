//
import Fab from "./Fab";
import Card from "./Card";
import Chip from "./Chip";
import Menu from "./Menu";
import Link from "./Link";
import Lists from "./List";

import Alert from "./Alert";

import Paper from "./Paper";
import Input from "./Input";

import Drawer from "./Drawer";
import Dialog from "./Dialog";
import Avatar from "./Avatar";
import Rating from "./Rating";

import Button from "./Button";
import SvgIcon from "./SvgIcon";
import Backdrop from "./Backdrop";
import Progress from "./Progress";
import Accordion from "./Accordion";
import Typography from "./Typography";
import ButtonGroup from "./ButtonGroup";
import CssBaseline from "./CssBaseline";
import Autocomplete from "./Autocomplete";
import ToggleButton from "./ToggleButton";
import LoadingButton from "./LoadingButton";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Fab(theme),
    Chip(theme),
    Card(theme),
    Menu(theme),
    Link(theme),
    Input(theme),
    Lists(theme),
    Paper(theme),
    Alert(theme),
    Button(theme),
    Rating(theme),
    Dialog(theme),
    Avatar(theme),
    Drawer(theme),
    SvgIcon(theme),
    Backdrop(theme),
    Progress(theme),
    Accordion(theme),
    Typography(theme),
    ButtonGroup(theme),
    CssBaseline(theme),
    Autocomplete(theme),
    ToggleButton(theme),
    LoadingButton(theme)
  );
}
