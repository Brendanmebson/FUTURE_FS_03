import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

export function SoundwavePattern({ className = '', animated = true }) {
  const bars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    height: Math.random() * 100 + 20,
    delay: Math.random() * 2,
  }));

  return (
    <Box className={className} sx={{ display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
      {bars.map((bar) => (
        <motion.div
          key={bar.id}
          style={{
            width: 4,
            height: `${bar.height}%`,
            borderRadius: 2,
            background: 'linear-gradient(to top, #1DB954, #8B5CF6)',
            opacity: 0.7,
          }}
          animate={
            animated
              ? {
                  height: [`${bar.height}%`, `${Math.random() * 100 + 20}%`, `${bar.height}%`],
                  opacity: [0.7, 1, 0.7],
                }
              : {}
          }
          transition={{
            duration: 2,
            delay: bar.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </Box>
  );
}
