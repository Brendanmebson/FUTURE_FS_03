import React from 'react';
import { Box } from '@mui/material';

export function SoundwaveVisualizer({ barCount = 20, className = '' }) {
  const bars = [...Array(barCount)];

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: '2px',
      }}
    >
      {bars.map((_, i) => (
        <Box
          key={i}
          sx={{
            width: 4,
            borderRadius: '50%',
            background: 'linear-gradient(to top, #1DB954, #8B5CF6, #06B6D4)',
            height: `${20 + (i * 3) % 60}%`,
            animation: `equalizer ${1 + (i % 3) * 0.5}s ease-in-out ${i * 0.1}s infinite alternate`,
          }}
        />
      ))}

      {/* Keyframes animation */}
      <style>
        {`
          @keyframes equalizer {
            0% { transform: scaleY(0.5); opacity: 0.6; }
            50% { transform: scaleY(1.2); opacity: 1; }
            100% { transform: scaleY(0.5); opacity: 0.6; }
          }
        `}
      </style>
    </Box>
  );
}
