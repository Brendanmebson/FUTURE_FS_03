import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, Compass, Crown, Smartphone, User, Music } from "lucide-react";

// 💫 Custom Glowing Logo Component
const Logo = ({ onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.2,
        cursor: "pointer",
        userSelect: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          textShadow: "0 0 15px rgba(29,185,84,0.7)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 38,
          height: 38,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(29,185,84,0.3), transparent 70%)",
          boxShadow: "0 0 15px rgba(29,185,84,0.6)",
          color: "#1DB954",
        }}
      >
        <Music size={22} strokeWidth={2} />
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontFamily: '"Orbitron", sans-serif',
          fontWeight: 700,
          letterSpacing: 1,
          background: "linear-gradient(90deg, #1DB954, #00FFAA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 10px rgba(29,185,84,0.7)",
        }}
      >
        Spotify
      </Typography>
    </Box>
  );
};

// 🧭 Main Navigation Component
export function Navigation({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "explore", label: "Explore", icon: Compass },
    { id: "premium", label: "Premium", icon: Crown },
    { id: "mobile", label: "Mobile App", icon: Smartphone },
    { id: "profile", label: "Profile", icon: User },
  ];

  const authItems = [
    { id: "login", label: "Log In" },
    { id: "signup", label: "Sign Up" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(29,185,84,0.3)",
          boxShadow: "0 2px 10px rgba(29,185,84,0.1)",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            width: "100%",
            px: { xs: 2, md: 4 },
          }}
        >
          {/* 🔮 Left: Custom Glowing Logo */}
          <Logo onClick={() => onNavigate("home")} />

          {/* 💻 Middle: Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <Button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  startIcon={<Icon size={18} />}
                  sx={{
                    color: isActive ? "#1DB954" : "gray",
                    bgcolor: isActive ? "rgba(29,185,84,0.1)" : "transparent",
                    borderRadius: "50px",
                    px: 2,
                    fontWeight: 500,
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                      bgcolor: "rgba(255,255,255,0.05)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* 🔐 Right: Auth Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {authItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                variant={item.id === "signup" ? "contained" : "outlined"}
                sx={{
                  bgcolor: item.id === "signup" ? "#1DB954" : "transparent",
                  color: item.id === "signup" ? "black" : "#1DB954",
                  borderColor: "#1DB954",
                  borderRadius: "50px",
                  px: 3,
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor:
                      item.id === "signup"
                        ? "rgba(29,185,84,0.9)"
                        : "rgba(29,185,84,0.1)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* 📱 Mobile Menu Toggle */}
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { md: "none" } }}
            onClick={() => setIsMenuOpen(true)}
          >
            <Box sx={{ width: 24, height: 24, position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: isMenuOpen ? "50%" : "25%",
                  width: "100%",
                  height: 2,
                  bgcolor: "white",
                  transform: isMenuOpen ? "rotate(45deg)" : "none",
                  transition: "all 0.3s",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  width: "100%",
                  height: 2,
                  bgcolor: "white",
                  opacity: isMenuOpen ? 0 : 1,
                  transform: "translateY(-50%)",
                  transition: "all 0.3s",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: isMenuOpen ? "50%" : "25%",
                  width: "100%",
                  height: 2,
                  bgcolor: "white",
                  transform: isMenuOpen ? "rotate(-45deg)" : "none",
                  transition: "all 0.3s",
                }}
              />
            </Box>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 📱 Mobile Drawer Menu */}
      <Drawer
        anchor="top"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <Box
          sx={{
            p: 3,
            bgcolor: "#0d0d0d",
            minHeight: "100vh",
            color: "white",
            borderTop: "2px solid rgba(29,185,84,0.3)",
          }}
        >
          <List>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    sx={{
                      borderRadius: 2,
                      mb: 1,
                      bgcolor:
                        currentPage === item.id
                          ? "rgba(29,185,84,0.1)"
                          : "transparent",
                      "&:hover": { bgcolor: "rgba(29,185,84,0.1)" },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: currentPage === item.id ? "#1DB954" : "gray",
                        minWidth: 36,
                      }}
                    >
                      <Icon size={20} />
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              );
            })}

            <Box sx={{ mt: 3 }}>
              {authItems.map((item) => (
                <Button
                  key={item.id}
                  fullWidth
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  variant={item.id === "signup" ? "contained" : "outlined"}
                  sx={{
                    mb: 1,
                    bgcolor: item.id === "signup" ? "#1DB954" : "transparent",
                    color: item.id === "signup" ? "black" : "#1DB954",
                    borderColor: "#1DB954",
                    borderRadius: "50px",
                    "&:hover": {
                      bgcolor:
                        item.id === "signup"
                          ? "rgba(29,185,84,0.9)"
                          : "rgba(29,185,84,0.1)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
