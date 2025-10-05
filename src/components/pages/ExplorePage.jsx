import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  TextField,
  InputAdornment,
  Chip,
  Stack,
  Container,
} from "@mui/material";
import { Search, Filter, Play, Heart, MoreHorizontal } from "lucide-react";

/* 🧠 Static data */
const GENRES = [
  "Electronic",
  "Hip Hop",
  "Rock",
  "Pop",
  "Jazz",
  "Classical",
  "R&B",
  "Country",
];
const MOODS = [
  "Chill",
  "Party",
  "Workout",
  "Focus",
  "Sleep",
  "Driving",
  "Happy",
  "Sad",
];
const DISCOVER_CONTENT = [
  {
    id: 1,
    type: "playlist",
    title: "Cyberpunk Essentials",
    subtitle: "Electronic beats for the future",
    cover:
      "https://images.unsplash.com/photo-1655928461456-b5c6db979360?q=80&w=1080",
  },
  {
    id: 2,
    type: "artist",
    title: "NEON SYNTH",
    subtitle: "Electronic Producer",
    cover:
      "https://images.unsplash.com/photo-1573460532456-55c00b654160?q=80&w=1080",
  },
  {
    id: 3,
    type: "album",
    title: "Digital Dreams",
    subtitle: "CYBER DJ",
    cover:
      "https://images.unsplash.com/photo-1616709062048-788acece6a51?q=80&w=1080",
  },
  {
    id: 4,
    type: "playlist",
    title: "Future Bass Mix",
    subtitle: "The best of tomorrow's sound",
    cover:
      "https://images.unsplash.com/photo-1655928461456-b5c6db979360?q=80&w=1080",
  },
  {
    id: 5,
    type: "podcast",
    title: "Tech Talk Radio",
    subtitle: "Weekly tech discussions",
    cover:
      "https://images.unsplash.com/photo-1616709062048-788acece6a51?q=80&w=1080",
  },
  {
    id: 6,
    type: "album",
    title: "Neon Nights",
    subtitle: "VOID DANCER",
    cover:
      "https://images.unsplash.com/photo-1573460532456-55c00b654160?q=80&w=1080",
  },
];

export default function ExplorePage({ onNavigate }) {
  return (
    <Box sx={{ bgcolor: "black", minHeight: "100vh", pt: 10, pb: 8 }}>
      <Container maxWidth="lg">
        {/* 🔍 SEARCH */}
        <Box mb={6}>
          <TextField
            fullWidth
            placeholder="Search for music, artists, podcasts..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="#888" size={20} />
                </InputAdornment>
              ),
              sx: {
                color: "white",
                bgcolor: "#1a1a1a",
                borderRadius: "50px",
                input: { color: "white" },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "#333" },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1DB954",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1DB954",
                },
              },
            }}
          />
        </Box>

        {/* 🎚 FILTERS */}
        <Box mb={8}>
          <Stack direction="row" alignItems="center" spacing={2} mb={3}>
            <Filter color="#1DB954" size={20} />
            <Typography color="white">Filter by:</Typography>
          </Stack>

          <FilterSection title="GENRES" items={GENRES} hoverColor="#1DB954" />
          <FilterSection title="MOODS" items={MOODS} hoverColor="#8b5cf6" />
        </Box>

        {/* 🚀 DISCOVER */}
        <DiscoverSection content={DISCOVER_CONTENT} onNavigate={onNavigate} />

        {/* 🔥 TRENDING */}
        <TrendingSection />
      </Container>
    </Box>
  );
}

/* 🧩 SUBCOMPONENTS */

function FilterSection({ title, items, hoverColor }) {
  return (
    <Box mb={3}>
      <Typography color="gray" variant="subtitle2" mb={1}>
        {title}
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {items.map((item) => (
          <Chip
            key={item}
            label={item}
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              border: "1px solid #333",
              "&:hover": { bgcolor: hoverColor, color: "black" },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}

function DiscoverSection({ content, onNavigate }) {
  return (
    <Box mb={8}>
      <Typography
        variant="h5"
        mb={4}
        sx={{
          background: "linear-gradient(to right, #1DB954, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Discover New Music
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        gap={3}
        justifyContent="space-between"
      >
        {content.map((item) => (
          <Box
            key={item.id}
            sx={{
              flexBasis: { xs: "100%", sm: "48%", md: "30%" },
              minWidth: 280,
            }}
          >
            <MusicCard item={item} onNavigate={onNavigate} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

function MusicCard({ item, onNavigate }) {
  return (
    <Card
      onClick={() =>
        item.type === "artist" ? onNavigate("artist") : onNavigate("playlist")
      }
      sx={{
        bgcolor: "#121212",
        borderRadius: "16px",
        p: 2,
        cursor: "pointer",
        border: "1px solid #222",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          bgcolor: "#1a1a1a",
          borderColor: "#1DB954",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={item.cover}
          alt={item.title}
          sx={{
            borderRadius: "12px",
            height: 240,
            objectFit: "cover",
          }}
        />

        {/* Hover Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.4)",
            opacity: 0,
            transition: "opacity 0.3s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            "&:hover": { opacity: 1 },
          }}
        >
          <Play color="#1DB954" size={40} />
        </Box>

        {/* Action Icons */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            gap: 1,
            opacity: 0,
            transition: "opacity 0.3s",
            "&:hover": { opacity: 1 },
          }}
        >
          <IconButton size="small" sx={{ bgcolor: "rgba(0,0,0,0.6)" }}>
            <Heart color="white" size={16} />
          </IconButton>
          <IconButton size="small" sx={{ bgcolor: "rgba(0,0,0,0.6)" }}>
            <MoreHorizontal color="white" size={16} />
          </IconButton>
        </Box>
      </Box>

      <CardContent sx={{ color: "white" }}>
        <Typography variant="subtitle1">{item.title}</Typography>
        <Typography variant="body2" color="gray">
          {item.subtitle}
        </Typography>
        <Chip
          label={item.type.toUpperCase()}
          size="small"
          sx={{
            mt: 1,
            bgcolor: "rgba(29,185,84,0.2)",
            color: "#1DB954",
            fontSize: "0.7rem",
          }}
        />
      </CardContent>
    </Card>
  );
}

function TrendingSection() {
  return (
    <Box>
      <Typography
        variant="h5"
        mb={4}
        sx={{
          background: "linear-gradient(to right, #1DB954, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Trending Now
      </Typography>

      <Card
        sx={{
          bgcolor: "#121212",
          borderRadius: "16px",
          p: 3,
          border: "1px solid #222",
        }}
      >
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          gap={2}
        >
          {[...Array(8)].map((_, i) => (
            <Box
              key={i}
              sx={{
                flexBasis: { xs: "100%", sm: "48%", md: "22%" },
                display: "flex",
                alignItems: "center",
                p: 1.5,
                borderRadius: "10px",
                transition: "0.2s",
                "&:hover": { bgcolor: "#1a1a1a", cursor: "pointer" },
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "8px",
                  background:
                    "linear-gradient(to bottom right, #1DB954, #8b5cf6)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Play color="white" size={20} />
              </Box>
              <Box ml={2}>
                <Typography variant="body2" color="white">
                  Track {i + 1}
                </Typography>
                <Typography variant="caption" color="gray">
                  Artist Name
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Card>
    </Box>
  );
}
