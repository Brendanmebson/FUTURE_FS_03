import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MusicCard({ title, artist, cover, onClick, animated = true }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        bgcolor: '#121212',
        borderRadius: 4,
        p: 3,
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
          bgcolor: '#1a1a1a',
          transform: 'scale(1.05)',
        },
        position: 'relative',
        overflow: 'hidden',
        animation: animated ? 'slideUp 0.5s ease-out' : 'none',
      }}
    >
      <Box sx={{ position: 'relative', mb: 2 }}>
        <ImageWithFallback
          src={cover}
          alt={title}
          sx={{ width: '100%', aspectRatio: '1/1', borderRadius: 3, objectFit: 'cover' }}
        />

        {/* Hover overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.4)',
            opacity: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 3,
            transition: 'opacity 0.3s',
            '&:hover': { opacity: 1 },
          }}
        >
          <PlayArrow sx={{ fontSize: 48, color: '#1DB954', animation: 'float 2s ease-in-out infinite' }} />
        </Box>

        {/* Floating particles */}
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {[...Array(3)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                width: 4,
                height: 4,
                bgcolor: '#1DB954',
                borderRadius: '50%',
                opacity: 0,
                left: `${20 + i * 25}%`,
                top: `${30 + i * 15}%`,
                transition: 'opacity 0.3s',
                animationDelay: `${i * 0.2}s`,
                '&:hover': { opacity: 0.6 },
              }}
            />
          ))}
        </Box>
      </Box>

      <Typography
        variant="subtitle1"
        sx={{
          color: 'white',
          mb: 0.5,
          transition: 'color 0.2s',
          '&:hover': { color: '#1DB954' },
        }}
      >
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'gray.400' }}>
        {artist}
      </Typography>

      {/* Optional animations keyframes */}
      <style>
        {`
          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
    </Card>
  );
}
