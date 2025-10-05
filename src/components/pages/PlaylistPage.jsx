import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Paper,
} from "@mui/material";
import { Play, Heart, MoreHorizontal, Clock, Shuffle, Plus } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MusicCard } from "../MusicCard";
import { SoundwaveVisualizer } from "../SoundwaveVisualizer";

export default function PlaylistPage({ onNavigate }) {
  const tracks = [
    { id: 1, title: "Digital Horizon", artist: "CYBER DJ", album: "Digital Dreams", duration: "3:42", liked: true },
    { id: 2, title: "Neon Dreams", artist: "NEON QUEEN", album: "Electric Nights", duration: "4:15", liked: false },
    { id: 3, title: "Cyber Love", artist: "CYBER DJ", album: "Digital Dreams", duration: "3:28", liked: true },
    { id: 4, title: "Synth Wave", artist: "SYNTH RIDER", album: "Retro Future", duration: "4:02", liked: false },
    { id: 5, title: "Electric Soul", artist: "VOID DANCER", album: "Soul Machine", duration: "3:55", liked: true },
    { id: 6, title: "Future Bass", artist: "GRID WALKER", album: "Bass Evolution", duration: "4:32", liked: false },
    { id: 7, title: "Neon Lights", artist: "PULSE MASTER", album: "Light Spectrum", duration: "3:18", liked: true },
    { id: 8, title: "Digital Rain", artist: "CYBER DJ", album: "Digital Dreams", duration: "4:45", liked: false },
    { id: 9, title: "Circuit Breaker", artist: "NEON QUEEN", album: "Electric Nights", duration: "3:56", liked: true },
    { id: 10, title: "Quantum Beat", artist: "SYNTH RIDER", album: "Retro Future", duration: "4:12", liked: false }
  ];

  const totalDuration = tracks.reduce((total, track) => {
    const [minutes, seconds] = track.duration.split(":").map(Number);
    return total + minutes * 60 + seconds;
  }, 0);

  const formatTotalDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${mins}m`;
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "black", pt: 10, color: "white" }}>
      {/* HEADER */}
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(to bottom, rgba(29,185,84,0.2), black)",
          overflow: "hidden",
          pb: 6,
        }}
      >
        <SoundwaveVisualizer barCount={15} className="absolute inset-0 opacity-20" />

        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            p: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-end" },
            gap: 4,
          }}
        >
          {/* Playlist Image */}
          <Box
            sx={{
              width: { xs: "70%", sm: "50%", md: "30%" },
              borderRadius: 3,
              overflow: "hidden",
              border: "2px solid #1DB954",
              boxShadow: "0 0 15px #1DB954",
              aspectRatio: "1",
            }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1748187318662-63e53e850f7f"
              alt="Cyberpunk Vibes"
              className="w-full h-full object-cover"
            />
          </Box>

          {/* Playlist Info */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="overline" color="gray" sx={{ letterSpacing: 2 }}>
              PLAYLIST
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                mb: 2,
              }}
            >
              Cyberpunk Vibes
            </Typography>
            <Typography color="gray" sx={{ mb: 2 }}>
              A futuristic mix of beats made for coders, gamers, and night owls.
            </Typography>
            <Typography color="gray">
              <span style={{ color: "#1DB954" }}>CYBER DJ</span> • {tracks.length} songs •{" "}
              {formatTotalDuration(totalDuration)}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
                mt: 4,
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#1DB954",
                  color: "black",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  borderRadius: "999px",
                  "&:hover": { bgcolor: "#1ed760", boxShadow: "0 0 15px #1DB954" },
                }}
                startIcon={<Shuffle />}
              >
                Shuffle Play
              </Button>
              <IconButton sx={{ border: "1px solid gray", "&:hover": { borderColor: "#1DB954" } }}>
                <Heart color="white" />
              </IconButton>
              <IconButton sx={{ border: "1px solid gray", "&:hover": { borderColor: "#1DB954" } }}>
                <MoreHorizontal color="white" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* TRACK LIST */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3, mt: 4 }}>
        <Paper sx={{ bgcolor: "#121212", borderRadius: 3, overflow: "hidden", border: "1px solid #1DB95430" }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 2,
              py: 1.5,
              borderBottom: "1px solid #2a2a2a",
              color: "gray",
              fontSize: "0.9rem",
            }}
          >
            <Typography sx={{ flex: 0.3 }}>#</Typography>
            <Typography sx={{ flex: 2 }}>TITLE</Typography>
            <Typography sx={{ flex: 1 }}>ALBUM</Typography>
            <Typography sx={{ flex: 1 }}>DATE ADDED</Typography>
            <Clock size={16} />
          </Box>

          {/* Rows */}
          {tracks.map((track, index) => (
            <Box
              key={track.id}
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 1.5,
                "&:hover": { bgcolor: "#1a1a1a" },
                transition: "0.2s",
                flexWrap: "wrap",
              }}
            >
              <Typography color="gray" sx={{ flex: 0.3 }}>
                {index + 1}
              </Typography>

              <Box sx={{ flex: 2, display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "#1a1a1a",
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Play size={16} color="#1DB954" />
                </Box>
                <Box>
                  <Typography color="white">{track.title}</Typography>
                  <Typography
                    color="gray"
                    sx={{
                      "&:hover": { color: "#1DB954", textDecoration: "underline", cursor: "pointer" },
                    }}
                    onClick={() => onNavigate("artist")}
                  >
                    {track.artist}
                  </Typography>
                </Box>
              </Box>

              <Typography color="gray" sx={{ flex: 1 }}>
                {track.album}
              </Typography>
              <Typography color="gray" sx={{ flex: 1 }}>
                5 days ago
              </Typography>

              <Box
                sx={{
                  flex: 0.8,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <IconButton size="small" sx={{ color: track.liked ? "#1DB954" : "gray" }}>
                  <Heart size={16} />
                </IconButton>
                <Typography color="gray">{track.duration}</Typography>
                <IconButton size="small" sx={{ color: "gray" }}>
                  <Plus size={16} />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Paper>

        {/* RECOMMENDED SECTION */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 3,
            }}
          >
            Recommended based on this playlist
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {[
              { title: "Neon Pulse", artist: "CYBER BEATS", cover: "https://images.unsplash.com/photo-1655928461456-b5c6db979360" },
              { title: "Digital Storm", artist: "SYNTH MASTER", cover: "https://images.unsplash.com/photo-1616709062048-788acece6a51" },
              { title: "Electric Dreams", artist: "VOID WALKER", cover: "https://images.unsplash.com/photo-1573460532456-55c00b654160" },
              { title: "Future Waves", artist: "GRID RUNNER", cover: "https://images.unsplash.com/photo-1655928461456-b5c6db979360" },
            ].map((track, i) => (
              <Box key={i} sx={{ width: { xs: "100%", sm: "45%", md: "22%" } }}>
                <MusicCard
                  title={track.title}
                  artist={track.artist}
                  cover={track.cover}
                  onClick={() => onNavigate("playlist")}
                  animated
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
