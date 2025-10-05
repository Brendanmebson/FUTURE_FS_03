import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Stack,
  useTheme,
} from "@mui/material";
import {
  Smartphone,
  Download,
  Play,
  Star,
  Zap,
  Users,
  Heart,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function MobileAppPage({ onNavigate }) {
  const theme = useTheme();

  const features = [
    {
      icon: Play,
      title: "Offline Playback",
      description:
        "Download your music and listen anywhere, even without internet.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance for smooth streaming and quick searches.",
    },
    {
      icon: Users,
      title: "Social Features",
      description:
        "Share playlists, see what friends are listening to, and discover together.",
    },
    {
      icon: Heart,
      title: "Personalized",
      description:
        "AI-powered recommendations based on your unique taste in music.",
    },
  ];

  const screenshots = [
    {
      title: "Home",
      description: "Your personalized music hub",
      image:
        "https://images.unsplash.com/photo-1655928461456-b5c6db979360?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Player",
      description: "Immersive playback experience",
      image:
        "https://images.unsplash.com/photo-1616709062048-788acece6a51?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Search",
      description: "Find any song instantly",
      image:
        "https://images.unsplash.com/photo-1573460532456-55c00b654160?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const stats = [
    { number: "4.8", label: "App Store Rating", icon: Star },
    { number: "500M+", label: "Downloads", icon: Download },
    { number: "180+", label: "Countries", icon: Users },
    { number: "99%", label: "Uptime", icon: Zap },
  ];

  return (
    <Box sx={{ bgcolor: "#000", color: "white", minHeight: "100vh" }}>
      {/* 🌌 Hero Section */}
      <Box sx={{ position: "relative", py: { xs: 10, md: 20 }, overflow: "hidden" }}>
        {/* Equalizer bars in background */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "space-around",
            opacity: 0.1,
          }}
        >
          {[...Array(12)].map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 6,
                height: `${20 + (i * 5) % 80}px`,
                borderRadius: 3,
                background: "linear-gradient(180deg,#1DB954,#8b5cf6,#06b6d4)",
                animation: "bounce 2s infinite ease-in-out",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </Box>

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            spacing={8}
          >
            {/* Left side text */}
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Smartphone size={48} color="#1DB954" style={{ marginRight: 12 }} />
                <Typography
                  variant="h4"
                  sx={{
                    background: "linear-gradient(90deg, #1DB954, #8b5cf6, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 700,
                  }}
                >
                  Mobile App
                </Typography>
              </Box>

              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontWeight: 800,
                  background: "linear-gradient(90deg, #1DB954, #8b5cf6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Your Music, Anywhere
              </Typography>

              <Typography sx={{ color: "#aaa", mb: 4, fontSize: 18 }}>
                Take the full Spotify experience with you. Stream, download,
                and discover music on the go — now with a futuristic design and next-level speed.
              </Typography>

              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#1DB954",
                    color: "#1DB954",
                    borderRadius: 4,
                    px: 4,
                    py: 2,
                    fontWeight: 600,
                    "&:hover": { bgcolor: "#1DB954", color: "#000" },
                  }}
                >
                  Download on App Store
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#8b5cf6",
                    color: "#8b5cf6",
                    borderRadius: 4,
                    px: 4,
                    py: 2,
                    fontWeight: 600,
                    "&:hover": { bgcolor: "#8b5cf6", color: "#000" },
                  }}
                >
                  Get it on Google Play
                </Button>
              </Stack>
            </Box>

            {/* Phone Mockup */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: 300,
                  height: 600,
                  borderRadius: "3rem",
                  p: 2,
                  border: "4px solid #333",
                  overflow: "hidden",
                  boxShadow: "0 0 30px rgba(29,185,84,0.4)",
                  position: "relative",
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1578345218746-50a229b3d0f8?auto=format&fit=crop&w=800&q=80"
                  alt="App preview"
                  className="w-full h-full object-cover rounded-[2rem]"
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 6,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 80,
                    height: 20,
                    bgcolor: "#000",
                    borderRadius: 10,
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </Container>

        <style>
          {`
            @keyframes bounce {
              0%, 100% { transform: scaleY(0.3); }
              50% { transform: scaleY(1.2); }
            }
          `}
        </style>
      </Box>

      {/* ✨ Features Section */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            mb: 6,
            background: "linear-gradient(90deg, #1DB954, #8b5cf6, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          App Features
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          flexWrap="wrap"
          gap={4}
          justifyContent="center"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Paper
                key={i}
                sx={{
                  p: 4,
                  flex: "1 1 300px",
                  bgcolor: "#121212",
                  borderRadius: 4,
                  border: "1px solid #222",
                  textAlign: "center",
                  "&:hover": {
                    borderColor: "#1DB954",
                    transform: "translateY(-5px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Icon size={48} color="#1DB954" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {f.title}
                </Typography>
                <Typography sx={{ color: "#aaa" }}>{f.description}</Typography>
              </Paper>
            );
          })}
        </Stack>
      </Container>

      {/* 📸 Screenshots */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            mb: 6,
            background: "linear-gradient(90deg, #1DB954, #8b5cf6, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          App Screenshots
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="flex-start"
          gap={5}
          flexWrap="wrap"
        >
          {screenshots.map((shot, i) => (
            <Box key={i} textAlign="center" sx={{ flex: "1 1 280px" }}>
              <Box
                sx={{
                  border: "2px solid #333",
                  borderRadius: "2rem",
                  overflow: "hidden",
                  mb: 3,
                  boxShadow: "0 0 20px rgba(29,185,84,0.3)",
                }}
              >
                <img
                  src={shot.image}
                  alt={shot.title}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <Typography variant="h6">{shot.title}</Typography>
              <Typography sx={{ color: "#aaa" }}>{shot.description}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>

      {/* 📊 Stats Section */}
      <Box sx={{ py: 10, background: "linear-gradient(90deg,#1DB95422,#8b5cf622)" }}>
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-evenly"
            alignItems="center"
            gap={6}
            flexWrap="wrap"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Box key={i} textAlign="center">
                  <Icon size={40} color="#1DB954" />
                  <Typography
                    variant="h4"
                    sx={{
                      background:
                        "linear-gradient(90deg, #1DB954, #8b5cf6, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 700,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography sx={{ color: "#aaa" }}>{stat.label}</Typography>
                </Box>
              );
            })}
          </Stack>
        </Container>
      </Box>

      {/* 🚀 CTA */}
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Paper
          sx={{
            p: 6,
            bgcolor: "#121212",
            borderRadius: 6,
            border: "1px solid #222",
            boxShadow: "0 0 25px rgba(29,185,84,0.3)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              background: "linear-gradient(90deg, #1DB954, #8b5cf6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Ready to Take Your Music Mobile?
          </Typography>
          <Typography sx={{ color: "#aaa", mb: 4 }}>
            Download the app and experience the future of music streaming in
            your pocket.
          </Typography>
          <Button
            onClick={() => onNavigate("signup")}
            sx={{
              px: 6,
              py: 2,
              borderRadius: 10,
              bgcolor: "#1DB954",
              color: "#000",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "#1ed760",
                boxShadow: "0 0 30px rgba(29,185,84,0.6)",
              },
            }}
          >
            Get Started Today
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
