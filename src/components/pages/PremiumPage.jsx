import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import {
  Crown,
  Check,
  X,
  Music,
  Download,
  Zap,
  Users,
  Shield,
  Star,
} from "lucide-react";

export default function PremiumPage({ onNavigate }) {
  const theme = useTheme();

  const features = [
    { icon: Music, title: "Ad-free music", description: "Listen without interruptions", free: false, premium: true },
    { icon: Download, title: "Download music", description: "Listen offline anywhere", free: false, premium: true },
    { icon: Zap, title: "Unlimited skips", description: "Skip songs as much as you want", free: false, premium: true },
    { icon: Users, title: "Play any song", description: "Choose exactly what you want to hear", free: false, premium: true },
    { icon: Shield, title: "High quality audio", description: "320kbps sound quality", free: false, premium: true },
    { icon: Star, title: "Group Sessions", description: "Listen together in real-time", free: false, premium: true },
  ];

  const plans = [
    { name: "Premium Individual", price: "$9.99", period: "month", description: "Ad-free music listening, offline downloads, and more", popular: false },
    { name: "Premium Family", price: "$14.99", period: "month", description: "6 Premium accounts for family members living under one roof", popular: true },
    { name: "Premium Student", price: "$4.99", period: "month", description: "Premium at a discount for eligible students", popular: false },
  ];

  return (
    <Box sx={{ bgcolor: "black", color: "white", minHeight: "100vh", pt: 10 }}>
      {/* 🎧 HERO SECTION */}
      <HeroSection />

      {/* ⚖️ FEATURES COMPARISON */}
      <Box sx={{ py: 10, px: 3, maxWidth: 1200, mx: "auto" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 600,
            background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Premium vs Free
        </Typography>

        <Card
          sx={{
            bgcolor: "#121212",
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid #1DB95440",
          }}
        >
          {/* Header Row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 3,
              py: 2,
              borderBottom: "1px solid #222",
              fontWeight: "bold",
            }}
          >
            <Typography>Features</Typography>
            <Box display="flex" gap={6}>
              <Typography color="gray">Free</Typography>
              <Typography
                sx={{
                  background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Premium
              </Typography>
            </Box>
          </Box>

          {/* Features */}
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: 3,
                  py: 2,
                  borderBottom: "1px solid #222",
                  "&:hover": { bgcolor: "#1a1a1a" },
                }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Icon color="#1DB954" />
                  <Box>
                    <Typography>{f.title}</Typography>
                    <Typography variant="body2" color="gray">
                      {f.description}
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" gap={6}>
                  {f.free ? <Check color="#1DB954" /> : <X color="#555" />}
                  {f.premium ? <Check color="#1DB954" /> : <X color="#555" />}
                </Box>
              </Box>
            );
          })}
        </Card>
      </Box>

      {/* 💸 PLANS SECTION */}
      <Box sx={{ py: 10, px: 3, maxWidth: 1200, mx: "auto" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 600,
            background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Choose Your Plan
        </Typography>

        {/* FLEX Layout for Plans */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
          flexWrap="wrap"
        >
          {plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} features={features} />
          ))}
        </Stack>
      </Box>

      {/* 🚀 CTA */}
      <CTASection onNavigate={onNavigate} />
    </Box>
  );
}

/* 🏆 --- Subcomponents --- 🏆 */

function HeroSection() {
  return (
    <Box sx={{ textAlign: "center", py: { xs: 10, md: 14 }, position: "relative" }}>
      {/* Glow animation background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(29,185,84,0.15), transparent 70%)",
          animation: "pulse 6s ease-in-out infinite",
          "@keyframes pulse": {
            "0%,100%": { opacity: 0.5 },
            "50%": { opacity: 1 },
          },
        }}
      />

      <Box sx={{ position: "relative", zIndex: 10 }}>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Crown size={64} color="#1DB954" />
          <Typography
            variant="h2"
            sx={{
              ml: 1,
              fontWeight: 700,
              background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Premium
          </Typography>
        </Box>

        <Typography
          variant="h3"
          sx={{
            background: "linear-gradient(90deg, #1DB954, #8b5cf6, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 600,
            mb: 3,
          }}
        >
          Get Premium. Get Everything.
        </Typography>

        <Typography color="gray" sx={{ maxWidth: 600, mx: "auto", mb: 4, fontSize: 18 }}>
          Unlock ad-free listening, offline downloads, and studio-quality sound with
          Spotify Premium.
        </Typography>

        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
            color: "white",
            px: 6,
            py: 1.4,
            borderRadius: "50px",
            fontSize: "1.1rem",
            boxShadow: "0 0 25px rgba(29,185,84,0.4)",
            "&:hover": {
              background: "linear-gradient(90deg, #1ed760, #9333ea)",
              transform: "scale(1.05)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Go Premium
        </Button>
      </Box>
    </Box>
  );
}

function PlanCard({ plan, features }) {
  return (
    <Card
      sx={{
        bgcolor: "#121212",
        borderRadius: 4,
        p: 3,
        border: plan.popular ? "1px solid #1DB954" : "1px solid #333",
        boxShadow: plan.popular ? "0 0 25px rgba(29,185,84,0.3)" : "none",
        position: "relative",
        flex: "1 1 300px",
        transition: "0.3s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      {plan.popular && (
        <Chip
          label="Most Popular"
          sx={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "#1DB954",
            color: "white",
            fontWeight: 500,
          }}
        />
      )}

      <CardContent>
        <Typography variant="h6" align="center" mb={1}>
          {plan.name}
        </Typography>

        <Typography
          align="center"
          sx={{
            fontSize: "2rem",
            background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
          }}
        >
          {plan.price}
          <Typography component="span" color="gray">
            /{plan.period}
          </Typography>
        </Typography>

        <Typography align="center" color="gray" mb={3} fontSize={14}>
          {plan.description}
        </Typography>

        <Stack spacing={1.2}>
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <Box key={idx} display="flex" alignItems="center" gap={1}>
                <Icon size={18} color="#1DB954" />
                <Typography variant="body2">{f.title}</Typography>
              </Box>
            );
          })}
        </Stack>

        <Button
          fullWidth
          sx={{
            mt: 3,
            background: plan.popular
              ? "linear-gradient(90deg, #1DB954, #8b5cf6)"
              : "#1a1a1a",
            color: "white",
            borderRadius: "30px",
            py: 1.2,
            border: plan.popular ? "none" : "1px solid #333",
            "&:hover": {
              background: plan.popular
                ? "linear-gradient(90deg, #1ed760, #9333ea)"
                : "#1DB954",
            },
          }}
        >
          Get {plan.name}
        </Button>
      </CardContent>
    </Card>
  );
}

function CTASection({ onNavigate }) {
  return (
    <Box textAlign="center" py={10}>
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: 700,
          background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Ready to upgrade?
      </Typography>

      <Typography color="gray" mb={4}>
        Join millions of users who have unlocked the full Spotify experience.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
      >
        <Button
          sx={{
            background: "linear-gradient(90deg, #1DB954, #8b5cf6)",
            color: "white",
            px: 6,
            py: 1.2,
            borderRadius: "50px",
            "&:hover": {
              background: "linear-gradient(90deg, #1ed760, #9333ea)",
            },
          }}
        >
          Start Your Premium Journey
        </Button>

        <Button
          variant="outlined"
          onClick={() => onNavigate("home")}
          sx={{
            borderColor: "#1DB954",
            color: "white",
            borderRadius: "50px",
            px: 6,
            py: 1.2,
            "&:hover": { borderColor: "#8b5cf6", color: "#8b5cf6" },
          }}
        >
          Learn More
        </Button>
      </Stack>
    </Box>
  );
}
