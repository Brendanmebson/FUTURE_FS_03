import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion"; // ✅ use framer-motion instead of motion/react

export default function EqualizerPattern({ className = "", size = "md" }) {
  const sizeConfig = {
    sm: { bars: 5, width: 3, maxHeight: 30 },
    md: { bars: 8, width: 4, maxHeight: 50 },
    lg: { bars: 12, width: 5, maxHeight: 80 },
  };

  const config = sizeConfig[size];
  const bars = Array.from({ length: config.bars }, (_, i) => i);

  return (
    <Box
      className={className}
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "4px",
      }}
    >
      {bars.map((bar) => (
        <motion.div
          key={bar}
          style={{
            width: `${config.width}px`,
            backgroundColor: "#1DB954",
            borderRadius: "2px",
          }}
          animate={{
            height: [
              Math.random() * config.maxHeight + 10,
              Math.random() * config.maxHeight + 10,
              Math.random() * config.maxHeight + 10,
            ],
          }}
          transition={{
            duration: 0.8 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bar * 0.1,
          }}
        />
      ))}
    </Box>
  );
}
