import React, { useState, useEffect } from "react";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Navigation } from "./components/Navigation";
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import ExplorePage from "./components/pages/ExplorePage";
import ArtistPage from "./components/pages/ArtistPage";
import PlaylistPage from "./components/pages/PlaylistPage";
import ProfilePage from "./components/pages/ProfilePage";
import PremiumPage from "./components/pages/PremiumPage";
import MobileAppPage from "./components/pages/MobileAppPage";

// 🌈 MUI theme setup — handles dark background + global font
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#111111",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // 💫 Add cyberpunk glow + falling particle animation
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--cyberpunk-glow",
      "0 0 20px rgba(29, 185, 84, 0.6)"
    );

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: #1DB954;
        pointer-events: none;
        z-index: 1;
        border-radius: 50%;
        left: ${Math.random() * 100}vw;
        top: -10px;
        animation: fall ${3 + Math.random() * 4}s linear infinite;
        opacity: 0.7;
      `;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 7000);
    };

    const style = document.createElement("style");
    style.textContent = `
      @keyframes fall {
        to {
          transform: translateY(100vh);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    const interval = setInterval(createParticle, 300);
    return () => {
      clearInterval(interval);
      document.head.removeChild(style);
    };
  }, []);

  // 🧭 Page router logic
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <LandingPage onNavigate={setCurrentPage} />;
      case "login":
        return <LoginPage onNavigate={setCurrentPage} />;
      case "signup":
        return <SignupPage onNavigate={setCurrentPage} />;
      case "explore":
        return <ExplorePage onNavigate={setCurrentPage} />;
      case "artist":
        return <ArtistPage onNavigate={setCurrentPage} />;
      case "playlist":
        return <PlaylistPage onNavigate={setCurrentPage} />;
      case "profile":
        return <ProfilePage onNavigate={setCurrentPage} />;
      case "premium":
        return <PremiumPage onNavigate={setCurrentPage} />;
      case "mobile":
        return <MobileAppPage onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          position: "relative",
          overflowX: "hidden", // prevent horizontal scroll
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* 🌌 Soft background gradient */}
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            background: `
              radial-gradient(circle at 25% 25%, rgba(29,185,84,0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(139,92,246,0.2) 0%, transparent 50%)
            `,
            zIndex: 0,
            opacity: 0.25,
          }}
        />

        {/* 🧭 Navbar + Page Content */}
        <Box sx={{ position: "relative", zIndex: 10, flex: 1 }}>
          <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

          <Box
            sx={{
              transition: "all 0.5s ease-in-out",
              minHeight: "calc(100vh - 64px)",
              px: { xs: 2, sm: 4, md: 6 },
              py: 4,
            }}
          >
            {renderPage()}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
