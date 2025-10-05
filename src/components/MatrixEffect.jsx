import React from 'react';
import { Box } from '@mui/material';

export function MatrixEffect({ intensity = 'medium' }) {
  const getParticleCount = () => {
    switch (intensity) {
      case 'low':
        return 10;
      case 'medium':
        return 20;
      case 'high':
        return 30;
      default:
        return 20;
    }
  };

  const particles = [...Array(getParticleCount())].map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 4,
    left: Math.random() * 100,
  }));

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {particles.map((particle) => (
        <Box
          key={particle.id}
          sx={{
            position: 'absolute',
            opacity: 0.3,
            left: `${particle.left}%`,
            animation: `matrixEffect ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          <Box
            sx={{
              width: `${particle.size}px`,
              height: '100px',
              background: 'linear-gradient(to bottom, transparent, #1DB954, transparent)',
            }}
          />
        </Box>
      ))}

      <style>
        {`
          @keyframes matrixEffect {
            0% { transform: translateY(-100px); }
            100% { transform: translateY(100vh); }
          }
        `}
      </style>
    </Box>
  );
}
