import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import {
  PlayArrow,
  FavoriteBorder,
  MoreHoriz,
  People,
  MusicNote,
} from "@mui/icons-material";

const globalArtists = [
  "Dave", "Drake", "d4vd", "Kendrick Lamar", "J. Cole", "Headie One", "BoyWithUke",
  "Adele", "Ed Sheeran", "The Weeknd", "Dua Lipa", "RAYE", "Sam Smith", "Central Cee", "Stormzy"
];

const nigerianArtists = [
  "Burna Boy", "Rema", "Asake", "Omah Lay", "Tems", "Wizkid", "Davido", "Ayra Starr",
  "Fireboy DML", "Joeboy", "BNXN", "Lojay", "Mayorkun", "Simi", "Oxlade"
];

export default function ArtistPage({ onNavigate }) {
  const topTracks = [
    { id: 1, title: "Digital Horizon", plays: "2.5M", duration: "3:42" },
    { id: 2, title: "Neon Dreams", plays: "1.8M", duration: "4:15" },
    { id: 3, title: "Cyber Love", plays: "1.2M", duration: "3:28" },
    { id: 4, title: "Electric Soul", plays: "980K", duration: "4:02" },
    { id: 5, title: "Future Bass", plays: "756K", duration: "3:55" },
  ];

  const albums = [
    {
      id: 1,
      title: "Digital Dreams",
      year: "2024",
      cover: "https://images.unsplash.com/photo-1629923759854-156b88c433aa?auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 2,
      title: "Neon Nights",
      year: "2023",
      cover: "https://images.unsplash.com/photo-1748187318662-63e53e850f7f?auto=format&fit=crop&w=1080&q=80",
    },
    {
      id: 3,
      title: "Cyberpunk EP",
      year: "2022",
      cover: "https://images.unsplash.com/photo-1718644013409-b6097fe54a9f?auto=format&fit=crop&w=1080&q=80",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "black", color: "white" }}>
      {/* 🔥 Artist Banner */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "45vh", md: "60vh" },
          backgroundImage:
            "url('https://images.unsplash.com/photo-1616709062048-788acece6a51?auto=format&fit=crop&w=1080&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          p: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(3px)",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "flex-end" },
            gap: 3,
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: { xs: 140, sm: 180 },
              height: { xs: 140, sm: 180 },
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 0 25px #1DB95480",
              flexShrink: 0,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1573460532456-55c00b654160?auto=format&fit=crop&w=1080&q=80"
              alt="Artist Cover"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>

          <Box textAlign={{ xs: "center", sm: "left" }}>
            <Typography variant="caption" color="gray">
              VERIFIED ARTIST
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Spotify Reimagined
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
                mt: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <People sx={{ fontSize: 18 }} />
                <Typography variant="body2">2.4M monthly listeners</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MusicNote sx={{ fontSize: 18 }} />
                <Typography variant="body2">Electronic • Synthwave</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 🎛️ Action Buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          px: { xs: 3, md: 6 },
          mt: 5,
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#1DB954",
            color: "black",
            borderRadius: "50%",
            width: 64,
            height: 64,
            "&:hover": { bgcolor: "#1ed760" },
          }}
        >
          <PlayArrow sx={{ fontSize: 40 }} />
        </Button>
        <IconButton sx={{ border: "1px solid gray", color: "white" }}>
          <FavoriteBorder />
        </IconButton>
        <IconButton sx={{ border: "1px solid gray", color: "white" }}>
          <MoreHoriz />
        </IconButton>
      </Box>

      {/* 🎶 Top Tracks */}
      <Box sx={{ px: { xs: 3, md: 6 }, mt: 8 }}>
        <Typography variant="h5" sx={{ mb: 3, color: "#1DB954" }}>
          Popular
        </Typography>
        {topTracks.map((track, index) => (
          <Box
            key={track.id}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "#121212",
              p: 2,
              borderRadius: 2,
              mb: 1,
              "&:hover": { bgcolor: "#1a1a1a", cursor: "pointer" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="body2" color="gray">
                {index + 1}
              </Typography>
              <PlayArrow sx={{ color: "#1DB954" }} />
              <Box>
                <Typography>{track.title}</Typography>
                <Typography variant="body2" color="gray">
                  Spotify Reimagined
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 4,
                justifyContent: { xs: "center", sm: "flex-end" },
                mt: { xs: 1, sm: 0 },
              }}
            >
              <Typography variant="body2" color="gray">
                {track.plays}
              </Typography>
              <Typography variant="body2" color="gray">
                {track.duration}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* 💿 Albums */}
      <Box sx={{ px: { xs: 3, md: 6 }, mt: 8 }}>
        <Typography variant="h5" sx={{ mb: 3, color: "#1DB954" }}>
          Albums
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {albums.map((album) => (
            <Card
              key={album.id}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                bgcolor: "#121212",
                color: "white",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)", bgcolor: "#1a1a1a" },
              }}
              onClick={() => onNavigate && onNavigate("playlist")}
            >
              <CardMedia
                component="img"
                image={album.cover}
                alt={album.title}
                sx={{ height: 250 }}
              />
              <CardContent>
                <Typography variant="h6">{album.title}</Typography>
                <Typography variant="body2" color="gray">
                  {album.year} • Album
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* 🎤 Related Artists */}
      <Box sx={{ px: { xs: 3, md: 6 }, mt: 8, pb: 8 }}>
        <Typography variant="h5" sx={{ mb: 3, color: "#1DB954" }}>
          Fans also like
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {[...globalArtists.slice(0, 8), ...nigerianArtists.slice(0, 7)].map(
            (artist, index) => (
              <Card
                key={index}
                sx={{
                  bgcolor: "#121212",
                  textAlign: "center",
                  borderRadius: 3,
                  width: { xs: "45%", sm: "30%", md: "20%" },
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)", bgcolor: "#1a1a1a" },
                }}
              >
                <CardMedia
                  component="img"
                  image={`https://source.unsplash.com/random/300x300/?music,artist,${artist}`}
                  alt={artist}
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    mx: "auto",
                    mt: 2,
                  }}
                />
                <CardContent>
                  <Typography variant="h6">{artist}</Typography>
                  <Typography variant="body2" color="gray">
                    {index < 8 ? "Global Artist" : "Nigerian Artist"}
                  </Typography>
                </CardContent>
              </Card>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
}
