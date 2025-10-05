import React from "react";
import { Box, keyframes } from "@mui/material";

// Animations
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ping = keyframes`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.5); opacity: 0.1; }
  100% { transform: scale(1); opacity: 0.3; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
`;

export default function CyberpunkLoader({ size = "md" }) {
  const sizes = {
    sm: 32,
    md: 48,
    lg: 64,
  };

  const dimension = sizes[size] || sizes.md;

  return (
    <Box
      sx={{
        position: "relative",
        width: dimension,
        height: dimension,
      }}
    >
      {/* Outer Ring */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          border: "2px solid rgba(29, 185, 84, 0.3)",
          borderRadius: "50%",
          animation: `${spin} 1.2s linear infinite`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "50%",
            width: 4,
            height: 4,
            backgroundColor: "#1DB954",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      />

      {/* Inner Ring */}
      <Box
        sx={{
          position: "absolute",
          inset: "6px",
          border: "2px solid rgba(139, 92, 246, 0.3)",
          borderRadius: "50%",
          animation: `${spin} 1.5s linear infinite reverse`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "50%",
            width: 4,
            height: 4,
            backgroundColor: "#8b5cf6",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      />

      {/* Center Pulse */}
      <Box
        sx={{
          position: "absolute",
          inset: "12px",
          borderRadius: "50%",
          background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
          animation: `${pulse} 1.2s ease-in-out infinite`,
        }}
      />

      {/* Glow / Ping Effect */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          backgroundColor: "#1DB954",
          opacity: 0.2,
          animation: `${ping} 2s ease-in-out infinite`,
        }}
      />
    </Box>
  );
}
