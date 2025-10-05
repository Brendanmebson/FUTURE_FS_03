import React from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Paper,
  Divider,
} from "@mui/material";
import {
  Edit,
  Crown,
  Music,
  Users,
  Heart,
  Calendar,
  Settings,
} from "lucide-react";

export default function ProfilePage({ onNavigate }) {
  const userPlaylists = [
    {
      id: 1,
      title: "My Cyberpunk Mix",
      tracks: 47,
      cover:
        "https://images.unsplash.com/photo-1748187318662-63e53e850f7f?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
      public: true,
    },
    {
      id: 2,
      title: "Workout Beats",
      tracks: 32,
      cover:
        "https://images.unsplash.com/photo-1718644013409-b6097fe54a9f?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
      public: false,
    },
    {
      id: 3,
      title: "Chill Vibes",
      tracks: 28,
      cover:
        "https://images.unsplash.com/photo-1629923759854-156b88c433aa?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
      public: true,
    },
    {
      id: 4,
      title: "Late Night Sessions",
      tracks: 51,
      cover:
        "https://images.unsplash.com/photo-1662838358866-54026d223117?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
      public: false,
    },
  ];

  const recentActivity = [
    { action: "Added to playlist", item: "Digital Horizon by CYBER DJ", time: "2 hours ago" },
    { action: "Followed", item: "NEON QUEEN", time: "1 day ago" },
    { action: "Liked", item: "Future Bass by GRID WALKER", time: "2 days ago" },
    { action: "Created playlist", item: "My Cyberpunk Mix", time: "3 days ago" },
    { action: "Shared", item: "Neon Dreams Playlist", time: "1 week ago" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "black", pt: 10, color: "white" }}>
      {/* Profile Header */}
      <Box
        sx={{
          background: "linear-gradient(to bottom, rgba(139,92,246,0.15), black)",
          px: { xs: 3, md: 6 },
          pb: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 4,
        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            gap: 4,
          }}
        >
          <Avatar
            sx={{
              width: 160,
              height: 160,
              bgcolor: "#1DB954",
              fontSize: "3rem",
              boxShadow: "0 0 25px #1DB954",
            }}
          >
            CJ
          </Avatar>

          <Box sx={{ flex: 1, minWidth: 280 }}>
            <Typography variant="caption" color="gray">
              PROFILE
            </Typography>
            <Typography
              variant="h3"
              sx={{
                background: "linear-gradient(to right, #1DB954, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
                fontWeight: "bold",
              }}
            >
              CyberJunkie
            </Typography>

            <Box display="flex" flexWrap="wrap" gap={2} color="gray" fontSize="0.9rem">
              <Box display="flex" alignItems="center" gap={1}>
                <Music size={18} /> 4 public playlists
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Users size={18} /> 234 followers
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Heart size={18} /> 156 following
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Calendar size={18} /> Joined March 2022
              </Box>
            </Box>

            <Typography color="gray" mt={2} maxWidth={600}>
              Electronic music enthusiast | Future bass lover | Digital nomad
              exploring the cyberpunk soundscape.
            </Typography>
          </Box>
        </Box>

        {/* Buttons */}
        <Box display="flex" flexWrap="wrap" gap={2}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#1DB954",
              color: "black",
              "&:hover": { bgcolor: "#1ed760" },
              borderRadius: 10,
              px: 3,
              boxShadow: "0 0 10px #1DB954",
              textTransform: "none",
            }}
            startIcon={<Edit />}
          >
            Edit Profile
          </Button>

          <Button
            onClick={() => onNavigate("premium")}
            variant="contained"
            startIcon={<Crown />}
            sx={{
              background: "linear-gradient(to right, #1DB954, #8b5cf6)",
              borderRadius: 10,
              px: 3,
              boxShadow: "0 0 15px #1DB954",
              "&:hover": {
                background: "linear-gradient(to right, #1ed760, #9333ea)",
              },
              textTransform: "none",
            }}
          >
            Upgrade to Premium
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "gray",
              color: "white",
              borderRadius: "50%",
              minWidth: 48,
              "&:hover": { borderColor: "#1DB954" },
            }}
          >
            <Settings />
          </Button>
        </Box>
      </Box>

      {/* Main Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          px: { xs: 3, md: 6 },
          py: 6,
          gap: 4,
        }}
      >
        {/* Left Side */}
        <Box sx={{ flex: 1 }}>
          {/* Playlists */}
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              background: "linear-gradient(to right, #1DB954, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            My Playlists
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {userPlaylists.map((playlist) => (
              <Paper
                key={playlist.id}
                sx={{
                  flex: "1 1 calc(50% - 16px)",
                  minWidth: 260,
                  bgcolor: "#121212",
                  borderRadius: 3,
                  p: 2,
                  position: "relative",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { bgcolor: "#1a1a1a", transform: "translateY(-4px)" },
                }}
              >
                <Box
                  component="img"
                  src={playlist.cover}
                  alt={playlist.title}
                  sx={{
                    width: "100%",
                    height: 180,
                    borderRadius: 2,
                    objectFit: "cover",
                    mb: 2,
                  }}
                />
                <Typography variant="subtitle1" color="white" fontWeight="bold">
                  {playlist.title}
                </Typography>
                <Typography variant="caption" color="gray">
                  {playlist.tracks} songs
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    bgcolor: playlist.public
                      ? "rgba(29,185,84,0.2)"
                      : "rgba(100,100,100,0.2)",
                    color: playlist.public ? "#1DB954" : "gray",
                    borderRadius: 10,
                    px: 1.5,
                    py: 0.5,
                    fontSize: "0.7rem",
                  }}
                >
                  {playlist.public ? "Public" : "Private"}
                </Box>
              </Paper>
            ))}
          </Box>

          {/* Recently Played */}
          <Typography
            variant="h5"
            sx={{
              mt: 6,
              mb: 2,
              background: "linear-gradient(to right, #1DB954, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            Recently Played
          </Typography>

          <Paper sx={{ bgcolor: "#121212", borderRadius: 3, p: 3 }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {[...Array(8)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    flex: "1 1 calc(25% - 16px)",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 1,
                    borderRadius: 2,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#1a1a1a" },
                    minWidth: 180,
                  }}
                >
                  <Box
                    sx={{
                      background: "linear-gradient(to right, #1DB954, #8b5cf6)",
                      borderRadius: 2,
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Music size={22} />
                  </Box>
                  <Box>
                    <Typography variant="body2">Track {i + 1}</Typography>
                    <Typography variant="caption" color="gray">
                      Artist Name
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>

        {/* Right Sidebar */}
        <Box
          sx={{
            width: { xs: "100%", lg: 320 },
            flexShrink: 0,
          }}
        >
          <Paper sx={{ bgcolor: "#121212", borderRadius: 3, p: 3 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                background: "linear-gradient(to right, #1DB954, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Recent Activity
            </Typography>
            {recentActivity.map((a, i) => (
              <Box key={i} mb={1}>
                <Typography variant="body2" color="white">
                  <span style={{ color: "gray" }}>{a.action}</span> {a.item}
                </Typography>
                <Typography variant="caption" color="gray">
                  {a.time}
                </Typography>
                {i < recentActivity.length - 1 && (
                  <Divider sx={{ my: 1, borderColor: "#222" }} />
                )}
              </Box>
            ))}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
