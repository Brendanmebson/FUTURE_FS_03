import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Divider,
  Link,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Music } from "lucide-react";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

export default function SignupPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setErr(null);

    // Placeholder for Supabase or API call
    if (!formData.email || !formData.password || !formData.name) {
      setErr("All fields are required.");
      return;
    }

    console.log("Signing up with:", formData);
    onNavigate("login");
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        bgcolor: "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: 5, display: "flex", alignItems: "center", gap: 1 }}>
        <Music size={36} color="#1DB954" />
      </Box>

      {/* Title */}
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
        Sign up to
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 4 }}>
        start listening
      </Typography>

      {/* Form */}
      <Box
        component="form"
        onSubmit={handleSignup}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          maxWidth: 380,
          gap: 2.5,
        }}
      >
        <TextField
          name="name"
          placeholder="Full Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          InputProps={{
            sx: {
              bgcolor: "#121212",
              color: "white",
              borderRadius: "8px",
              "& fieldset": { borderColor: "#282828" },
              "&:hover fieldset": { borderColor: "#1DB954" },
              "&.Mui-focused fieldset": { borderColor: "#1DB954" },
            },
          }}
        />

        <TextField
          name="email"
          placeholder="Email address"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          InputProps={{
            sx: {
              bgcolor: "#121212",
              color: "white",
              borderRadius: "8px",
              "& fieldset": { borderColor: "#282828" },
              "&:hover fieldset": { borderColor: "#1DB954" },
              "&.Mui-focused fieldset": { borderColor: "#1DB954" },
            },
          }}
        />

        <TextField
          name="password"
          type="password"
          placeholder="Create password"
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          InputProps={{
            sx: {
              bgcolor: "#121212",
              color: "white",
              borderRadius: "8px",
              "& fieldset": { borderColor: "#282828" },
              "&:hover fieldset": { borderColor: "#1DB954" },
              "&.Mui-focused fieldset": { borderColor: "#1DB954" },
            },
          }}
        />

        {/* Terms Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "#1DB954",
                "&.Mui-checked": { color: "#1DB954" },
              }}
            />
          }
          label={
            <Typography variant="body2" sx={{ color: "#b3b3b3" }}>
              I agree to the{" "}
              <Link href="#" sx={{ color: "#1DB954" }}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" sx={{ color: "#1DB954" }}>
                Privacy Policy
              </Link>
            </Typography>
          }
        />

        {err && (
          <Typography color="error" sx={{ fontSize: "0.875rem" }}>
            {err}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "#1DB954",
            color: "black",
            borderRadius: "30px",
            fontWeight: 700,
            textTransform: "none",
            fontSize: "1rem",
            py: 1.3,
            "&:hover": { bgcolor: "#1ed760" },
          }}
        >
          Next
        </Button>

        <Typography sx={{ color: "#b3b3b3", my: 1 }}>or</Typography>

        {/* Social Signup */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            color: "white",
            borderColor: "#b3b3b3",
            borderRadius: "30px",
            py: 1.2,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              borderColor: "#1DB954",
              color: "#1DB954",
            },
          }}
        >
          Sign up with Google
        </Button>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<AppleIcon />}
          sx={{
            color: "white",
            borderColor: "#b3b3b3",
            borderRadius: "30px",
            py: 1.2,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              borderColor: "#1DB954",
              color: "#1DB954",
            },
          }}
        >
          Sign up with Apple
        </Button>
      </Box>

      {/* Redirect */}
      <Typography sx={{ color: "#b3b3b3", mt: 3 }}>
        Already have an account?{" "}
        <Button
          variant="text"
          onClick={() => onNavigate("login")}
          sx={{
            color: "#1DB954",
            textTransform: "none",
            fontWeight: 700,
          }}
        >
          Log in
        </Button>
      </Typography>
    </Container>
  );
}
