import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { PlayArrow, Shuffle, Favorite } from '@mui/icons-material';
import { SoundwavePattern } from './SoundwavePattern';
import { EqualizerPattern } from './EqualizerPattern';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const HomePage = ({ onPageChange }) => {
  const featuredPlaylists = [
    { id: 1, title: 'Cyberpunk Beats', creator: 'Spotify', tracks: '50 songs', image: 'https://images.unsplash.com/photo-1675292310383-0f4ef53fa3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300' },
    { id: 2, title: 'Neon Nights', creator: 'Future Sounds', tracks: '42 songs', image: 'https://images.unsplash.com/photo-1578300253266-dedd2cd40912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300' },
    { id: 3, title: 'Electric Dreams', creator: 'Synthwave Co.', tracks: '38 songs', image: 'https://images.unsplash.com/photo-1561230133-ff66db8d4fee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300' },
    { id: 4, title: 'Bass Drops', creator: 'Electronic Hub', tracks: '45 songs', image: 'https://images.unsplash.com/photo-1675292310383-0f4ef53fa3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300' },
    { id: 5, title: 'Retro Wave', creator: 'Vintage Vibes', tracks: '33 songs', image: 'https://images.unsplash.com/photo-1578300253266-dedd2cd40912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300' },
    { id: 6, title: 'Midnight Groove', creator: 'Night Owl', tracks: '29 songs', image: 'https://images.unsplash.com/photo-1561230133-ff66db8d4fee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300' },
  ];

  const trendingArtists = [
    'Daft Punk', 'The Midnight', 'Carpenter Brut', 'Perturbator', 'Power Trip',
    'Dance With The Dead', 'Gunship', 'FM-84', 'Lazerhawk', 'Miami Nights 1984'
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'black', pt: 8 }}>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', overflow: 'hidden', textAlign: 'center', py: { xs: 10, lg: 20 } }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, rgba(29,185,84,0.2), black, rgba(139,92,246,0.2))' }} />
        <SoundwavePattern className="absolute inset-0 h-full opacity-30" animated />

        <Box sx={{ position: 'relative', maxWidth: 1200, mx: 'auto', px: 2 }}>
          <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
            <span style={{ color: 'white' }}>Feel the </span>
            <span style={{ color: '#39FF14' }}>Music</span>
            <span style={{ color: 'white' }}>, </span>
            <span style={{ color: '#B266FF' }}>Everywhere</span>
          </Typography>
          <Typography variant="h6" sx={{ color: 'gray.400', maxWidth: 600, mx: 'auto', mb: 4 }}>
            Millions of songs and podcasts. No ads. No interruptions. Experience music like never before with our cyberpunk-inspired platform.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
            <Button
              onClick={() => onPageChange('signup')}
              sx={{ bgcolor: '#1DB954', color: 'black', px: 5, py: 1.5, borderRadius: 10, fontWeight: 600, '&:hover': { bgcolor: '#1DB954CC' } }}
            >
              Get Started Free
            </Button>
            <Button
              onClick={() => onPageChange('premium')}
              variant="outlined"
              sx={{ borderColor: '#8B5CF6', color: '#8B5CF6', px: 5, py: 1.5, borderRadius: 10, fontWeight: 600, '&:hover': { bgcolor: 'rgba(139,92,246,0.1)' } }}
            >
              Go Premium
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Featured Playlists */}
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, py: 10 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>Featured Playlists</Typography>
          <Button onClick={() => onPageChange('explore')} sx={{ color: '#1DB954', '&:hover': { bgcolor: 'rgba(29,185,84,0.1)' } }}>See all</Button>
        </Box>

        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
        }}>
          {featuredPlaylists.map((playlist) => (
            <Card
              key={playlist.id}
              sx={{
                width: { xs: '100%', sm: '45%', md: '30%', lg: '15%' },
                backgroundColor: '#111',
                borderRadius: 3,
                transition: 'transform 0.3s, background 0.3s',
                cursor: 'pointer',
                '&:hover': { bgcolor: '#222', transform: 'translateY(-6px)' },
              }}
              onClick={() => onPageChange('playlist')}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia>
                  <ImageWithFallback src={playlist.image} alt={playlist.title} sx={{ width: '100%', aspectRatio: '1/1', borderRadius: 3 }} />
                </CardMedia>
                <Button
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    width: 48,
                    height: 48,
                    bgcolor: '#1DB954',
                    borderRadius: '50%',
                    boxShadow: '0 0 12px #1DB95477',
                    '&:hover': { bgcolor: '#1DB954CC' },
                  }}
                >
                  <PlayArrow sx={{ ml: 0.5 }} />
                </Button>
              </Box>
              <CardContent>
                <Typography variant="subtitle1" sx={{ color: 'white', mb: 0.5, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{playlist.title}</Typography>
                <Typography variant="body2" sx={{ color: 'gray.400' }}>{playlist.creator}</Typography>
                <Typography variant="caption" sx={{ color: 'gray.500' }}>{playlist.tracks}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Trending Artists Marquee */}
      <Box sx={{ py: 10, borderTop: '1px solid #333', borderBottom: '1px solid #333', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(29,185,84,0.1), rgba(139,92,246,0.1))' }} />
        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ color: 'white', mb: 4 }}>Trending Artists</Typography>
          <Box sx={{ display: 'flex', animation: 'marquee 30s linear infinite', whiteSpace: 'nowrap', gap: 4 }}>
            {[...trendingArtists, ...trendingArtists].map((artist, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer' }}>
                <EqualizerPattern size="sm" />
                <Typography sx={{ color: 'gray.300', fontSize: 18, '&:hover': { color: '#1DB954' } }}>{artist}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Quick Actions */}
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, py: 10 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 4,
        }}>
          {[
            {
              title: 'Start Listening',
              icon: <PlayArrow sx={{ color: '#1DB954', fontSize: 32 }} />,
              desc: 'Jump right into your favorite tracks and discover new music tailored to your taste.',
              btnText: 'Explore Now',
              btnAction: () => onPageChange('explore'),
              color: '#1DB954',
            },
            {
              title: 'Smart Shuffle',
              icon: <Shuffle sx={{ color: '#8B5CF6', fontSize: 32 }} />,
              desc: 'Let our AI curate the perfect mix of songs based on your listening history and mood.',
              btnText: 'Try Shuffle',
              outlined: true,
              color: '#8B5CF6',
            },
            {
              title: 'Your Favorites',
              icon: <Favorite sx={{ color: '#1DB954', fontSize: 32 }} />,
              desc: 'Access your liked songs, custom playlists, and recently played tracks all in one place.',
              btnText: 'View Library',
              btnAction: () => onPageChange('profile'),
              color: '#1DB954',
            },
          ].map((action, idx) => (
            <Card key={idx} sx={{
              flex: 1,
              p: 4,
              textAlign: 'center',
              cursor: 'pointer',
              backgroundColor: '#111',
              borderRadius: 4,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': { boxShadow: 12, transform: 'translateY(-6px)' },
            }}>
              <Box sx={{
                mb: 4,
                width: 64,
                height: 64,
                mx: 'auto',
                borderRadius: '50%',
                bgcolor: `rgba(${action.color === '#1DB954' ? '29,185,84' : '139,92,246'},0.2)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {action.icon}
              </Box>
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>{action.title}</Typography>
              <Typography sx={{ color: 'gray.400', mb: 3 }}>{action.desc}</Typography>
              <Button
                variant={action.outlined ? 'outlined' : 'contained'}
                onClick={action.btnAction}
                sx={action.outlined
                  ? { borderColor: action.color, color: action.color, '&:hover': { bgcolor: 'rgba(139,92,246,0.1)' } }
                  : { bgcolor: action.color, color: 'black', '&:hover': { bgcolor: `${action.color}CC` } }}
              >
                {action.btnText}
              </Button>
            </Card>
          ))}
        </Box>
      </Box>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
};
