import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import HomeIcon from "@mui/icons-material/Home";
import Badge from "@mui/material/Badge";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../store/action/weather.action";
import { SearchLocation } from "./SearchLocation";

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

export function Header() {
  const dispatch = useDispatch();
  const { darkMode, favoritesLocations } = useSelector(
    (state) => state.weatherModule
  );

  const setToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Herolo WeatherApp
          </Typography>
          <Search>
          <SearchLocation />
          </Search>
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
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={favoritesLocations.length} color="error">
                <Link className="link" to="/favorites">
                  <FavoriteIcon />
                </Link>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="success"
            >
              <Badge color="primary">
                <Link className="link" to="/">
                  <HomeIcon />
                </Link>
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
