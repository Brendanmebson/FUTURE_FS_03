import React from "react";
import { Box, Typography, keyframes } from "@mui/material";
import { Waves } from "lucide-react";

// 🌠 Keyframe animations for glow + pulse + orbit
const pulse = keyframes`
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px #1DB954); }
  50% { transform: scale(1.15); filter: drop-shadow(0 0 15px #00FFAA); }
`;

const orbit = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Logo = ({ onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        cursor: "pointer",
        userSelect: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.08)",
          textShadow: "0 0 20px rgba(0,255,170,0.8)",
        },
      }}
    >
      {/* 💫 Orbital Glow Container */}
      <Box
        sx={{
          position: "relative",
          width: 48,
          height: 48,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,255,170,0.25), rgba(29,185,84,0.05) 70%)",
          boxShadow: "0 0 20px rgba(0,255,170,0.5)",
          animation: `${pulse} 3s ease-in-out infinite`,
        }}
      >
        {/* 🌌 Rotating Halo */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px dashed rgba(0,255,170,0.3)",
            animation: `${orbit} 8s linear infinite`,
          }}
        />
        {/* 🎵 Icon */}
        <Waves size={26} strokeWidth={2} color="#1DB954" />
      </Box>

      {/* 🪐 Text Logo */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: '"Orbitron", sans-serif',
          fontWeight: 700,
          letterSpacing: 1.5,
          background: "linear-gradient(90deg, #00FFAA, #1DB954, #00FFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow:
            "0 0 15px rgba(0,255,170,0.8), 0 0 30px rgba(29,185,84,0.5)",
          transition: "all 0.3s ease",
        }}
      >
        StellarWave
      </Typography>
    </Box>
  );
};
