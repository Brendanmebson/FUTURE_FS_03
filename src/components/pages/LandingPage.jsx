import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { MusicNote, People, ChevronRight } from "@mui/icons-material";
import { MatrixEffect } from "../MatrixEffect";
import { SoundwaveVisualizer } from "../SoundwaveVisualizer";

export default function LandingPage({ onNavigate }) {
  const featuredPlaylists = [
    {
      id: 1,
      title: "Global Bangers",
      artist: "Various Artists",
      cover:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Rap UK",
      artist: "Dave, Headie One, Stormzy",
      cover:
        "https://images.unsplash.com/photo-1600170311833-54f7e7efed2a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Mellow Vibes",
      artist: "d4vd, BoyWithUke, Billie Eilish",
      cover:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "RapCaviar",
      artist: "Drake, J. Cole, Kendrick Lamar",
      cover:
        "https://images.unsplash.com/photo-1555617983-94aafef2b826?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Late Night Drive",
      artist: "Travis Scott, SZA, Brent Faiyaz",
      cover:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Future Sound",
      artist: "The Weeknd, Fred Again.., Tate McRae",
      cover:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Lo-Fi Lounge",
      artist: "Chilled Cow, Lofi Girl",
      cover:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Naija Heat",
      artist: "Burna Boy, Wizkid, Asake",
      cover:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const trendingArtists = [
    "Drake", "Dave", "d4vd", "BoyWithUke", "Kendrick Lamar", "J. Cole", "Central Cee",
    "The Weeknd", "SZA", "Billie Eilish", "Post Malone", "Dua Lipa",
    "Burna Boy", "Wizkid", "Asake", "Rema", "Omah Lay", "Fireboy DML",
    "Tems", "Ayra Starr", "Odumodublvck", "Zlatan", "Bella Shmurda", "Chike", "Teni",
  ];

  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      {/* 🎧 HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          pt: { xs: 8, md: 10 },
        }}
      >
        <MatrixEffect intensity="high" />
        <SoundwaveVisualizer barCount={25} className="absolute inset-0 opacity-30" />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.5))",
          }}
        />

        {/* Hero Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: 800,
            px: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.8rem", md: "5rem" },
              fontWeight: 700,
              background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 1,
              lineHeight: 1.1,
              marginRight: 15,
            }}
          >
            Feel the Music,
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.8rem", md: "5rem" },
              fontWeight: 700,
              background: "linear-gradient(90deg, #8b5cf6, #1DB954)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 3,
              lineHeight: 1.1,
               marginRight: 15
            }}
          >
            Everywhere
          </Typography>
          <Typography variant="h6" sx={{ color: "#bbb", mb: 5 ,  marginRight: 15}}>
            Immerse yourself in global and African sounds — from London to Lagos.
          </Typography>
          <Button
            onClick={() => onNavigate("signup")}
            variant="contained"
            sx={{
              backgroundColor: "#1DB954",
              color: "black",
              borderRadius: "50px",
              px: 6,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#1ed760" },
              boxShadow: "0 0 25px rgba(29,185,84,0.4)",
               marginRight: 15
            }}
          >
            Get Started Free
          </Button>
        </Box>
      </Box>

      {/* 💿 FEATURED PLAYLISTS */}
      <Box sx={{ py: 10, px: { xs: 2, md: 6 } }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={5}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Featured Playlists
          </Typography>
          <Button
            onClick={() => onNavigate("explore")}
            endIcon={<ChevronRight />}
            sx={{ color: "#1DB954", "&:hover": { color: "#1ed760" } }}
          >
            View All
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {featuredPlaylists.map((playlist) => (
            <Box
              key={playlist.id}
              sx={{
                flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 22%" },
                bgcolor: "#181818",
                borderRadius: 3,
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 0 25px rgba(139,92,246,0.3)",
                },
                maxWidth: 300,
              }}
              onClick={() => onNavigate("playlist")}
            >
              <Box
                component="img"
                src={playlist.cover}
                alt={playlist.title}
                sx={{ width: "100%", height: 220, objectFit: "cover" }}
              />
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  {playlist.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {playlist.artist}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* 🎤 TRENDING ARTISTS */}
      <Box
        sx={{
          py: 8,
          px: { xs: 2, md: 4 },
          background:
            "linear-gradient(90deg, rgba(29,185,84,0.1), rgba(139,92,246,0.1))",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 5,
            background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Trending Artists
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            animation: "marquee 30s linear infinite",
          }}
        >
          {[...trendingArtists, ...trendingArtists].map((artist, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                backgroundColor: "rgba(0,0,0,0.6)",
                borderRadius: "30px",
                px: 3,
                py: 1,
                minWidth: "max-content",
                border: "1px solid rgba(29,185,84,0.4)",
              }}
            >
              <People sx={{ color: "#1DB954" }} />
              <Typography variant="body1">{artist}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* 🖤 FOOTER */}
      <Box
        sx={{
          bgcolor: "#121212",
          py: 8,
          px: { xs: 2, md: 6 },
          mt: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flex: "1 1 200px" }}>
            <Box display="flex" alignItems="center" mb={2}>
              <MusicNote sx={{ color: "#1DB954", mr: 1 }} />
              <Typography
                variant="h6"
                sx={{
                  background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Spotify
              </Typography>
            </Box>
            <Typography variant="body2" color="gray">
              A bold, neon-inspired redesign of Spotify — blending Afrobeat
              energy and global rhythm.
            </Typography>
          </Box>

          <Box sx={{ flex: "1 1 150px" }}>
            <Typography variant="h6" mb={1}>
              Company
            </Typography>
            <Typography color="gray">About</Typography>
            <Typography color="gray">Jobs</Typography>
            <Typography color="gray">For the Record</Typography>
          </Box>

          <Box sx={{ flex: "1 1 150px" }}>
            <Typography variant="h6" mb={1}>
              Communities
            </Typography>
            <Typography color="gray">For Artists</Typography>
            <Typography color="gray">Developers</Typography>
            <Typography color="gray">Advertising</Typography>
          </Box>

          <Box sx={{ flex: "1 1 150px" }}>
            <Typography variant="h6" mb={1}>
              Useful Links
            </Typography>
            <Typography color="gray">Support</Typography>
            <Typography color="gray">Web Player</Typography>
            <Typography color="gray">Free Mobile App</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: "#333" }} />
        <Typography align="center" color="gray">
          © 2025 Spotify Redesign by Brendan. All rights reserved.
        </Typography>
      </Box>

      {/* 🔥 Animations */}
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
}
