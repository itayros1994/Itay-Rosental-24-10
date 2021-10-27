import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  toggleDarkMode,
  toggleTemperature,
} from "../store/action/weather.action";
import { useDispatch, useSelector } from "react-redux";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { SearchLocation } from "./SearchLocation";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Switch from "@mui/material/Switch";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export function Header() {
  const dispatch = useDispatch();
  const { darkMode, favoritesLocations, currentLocation ,celcius } = useSelector(
    (state) => state.weatherModule
  );

  const setToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const setToggleTemperature = () => {
    dispatch(toggleTemperature());
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link className="link-mobile" to="/favorites">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={favoritesLocations.length} color="error">
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>
          <p>Favorites</p>
        </MenuItem>
      </Link>
      <MenuItem>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={setToggleDarkMode}
          color="inherit"
        >
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Link className="link" to="/">
                <HomeIcon />
              </Link>
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Herolo WeatherApp
            </Typography>
            <Search>
              <SearchLocation />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {currentLocation.LocalizedName}
              </Typography>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                  <Switch color="default" onClick={setToggleTemperature}></Switch>
                  <span className="temperature-sign">{celcius ? 'C' : 'F'}</span>
                
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={setToggleDarkMode}
                color="inherit"
              >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={favoritesLocations.length} color="error">
                  <Link className="link" to="/favorites">
                    <FavoriteBorderIcon />
                  </Link>
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  );
}
