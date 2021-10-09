import "./Nav.css";

import Logo from "./partials/Logo";
import Navbar from "./partials/Navbar";

import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
// import { Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  myNav: {
    color: theme.palette.primary.navText,
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    // <Container>
    <nav>
      <Logo />
      <Navbar />
    </nav>
    // </Container>
  );
};

export default Nav;
