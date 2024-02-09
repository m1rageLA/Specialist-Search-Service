import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "../../assets/styles/theme/css/theme.css";
import theme from "../../assets/theme";
const pages = ["Products", "Pricing", "Blog"];

// eslint-disable-next-line no-unused-vars
const settings = ["Profile", "Account", "Dashboard", "Logout"];

let liElements = [
  { name: "Home", linkTo: "/Home" },
  { name: "About us", linkTo: "/AboutUs" },
  { name: "Contact", linkTo: "/Contact" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // eslint-disable-next-line no-unused-vars
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // eslint-disable-next-line no-unused-vars
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // eslint-disable-next-line no-unused-vars
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            color="text"
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 3,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".4rem",
              textDecoration: "none",
            }}
          >
            <NavLink style={{textDecoration: "none", color: theme.palette.logo}}>LOGO</NavLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            ></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", color: "items" },
            }}
          >
            {liElements.map((page) => (
              <NavLink style={{ textDecoration: "none" }} to={page.linkTo}>
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                  color="items"
                >
                  {page.name}
                </Button>
              </NavLink>
            ))}
          </Box>
          <NavLink style={{ textDecoration: "none" }} to="/LogIn">
            <Button
              sx={(theme) => ({
                ...theme.button.variant1,
                width: "100px",
                margin: "0 5px"
              })}
              variant="contained"
              color="button"
            >
              Login
            </Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/SignUp">
            <Button
              sx={(theme) => ({
                ...theme.button.variant1,
                width: "100px",
                margin: "0 5px"
              })}
              variant="contained"
              color="button"
            >
              SignUp
            </Button>
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
