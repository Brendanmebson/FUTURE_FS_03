import React from "react";
import { Box, Grid, Typography, IconButton, Link, Divider } from "@mui/material";
import { Music, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    Company: ["About", "Jobs", "For the Record"],
    Communities: ["For Artists", "Developers", "Advertising", "Investors", "Vendors"],
    "Useful Links": ["Support", "Download", "Web Player", "Free Mobile App"],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "black",
        borderTop: "1px solid #333",
        mt: 10,
        color: "#aaa",
        px: { xs: 3, sm: 6, md: 10 },
        py: 8,
      }}
    >
      <Grid container spacing={6}>
        {/* Logo + Social */}
        <Grid item xs={12} md={3}>
          <Box display="flex" alignItems="center" gap={1.5} mb={3}>
            <Music size={32} color="#1DB954" />
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
              Spotify
            </Typography>
          </Box>

          <Box display="flex" gap={2}>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <IconButton
                key={label}
                href={href}
                aria-label={label}
                sx={{
                  bgcolor: "#222",
                  color: "#888",
                  transition: "0.3s",
                  "&:hover": {
                    color: "#1DB954",
                    bgcolor: "rgba(29,185,84,0.1)",
                  },
                }}
              >
                <Icon size={20} />
              </IconButton>
            ))}
          </Box>
        </Grid>

        {/* Footer Links */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <Grid item xs={12} sm={6} md={3} key={category}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#fff", fontWeight: 600, mb: 2 }}
            >
              {category}
            </Typography>
            {links.map((link) => (
              <Link
                key={link}
                href="#"
                underline="none"
                sx={{
                  display: "block",
                  color: "#aaa",
                  fontSize: 14,
                  mb: 1,
                  transition: "0.2s",
                  "&:hover": { color: "#1DB954" },
                }}
              >
                {link}
              </Link>
            ))}
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ borderColor: "#333", my: 5 }} />

      {/* Bottom Legal Links */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Box display="flex" flexWrap="wrap" gap={3} sx={{ fontSize: 14 }}>
          {["Legal", "Privacy Center", "Privacy Policy", "Cookies", "About Ads"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                sx={{
                  color: "#aaa",
                  transition: "0.2s",
                  "&:hover": { color: "#1DB954" },
                }}
              >
                {item}
              </Link>
            )
          )}
        </Box>

        <Typography variant="body2" sx={{ color: "#777" }}>
          © 2025 Spotify AB
        </Typography>
      </Box>
    </Box>
  );
}
