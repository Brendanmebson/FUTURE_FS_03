import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  async function handleNext(e) {
    e.preventDefault();
    setErr(null);
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setErr(error.message);
    else navigate("/");
  }

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
        marginTop: 10,
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: 5, display: "flex", alignItems: "center", gap: 1 }}>
        <MusicNoteIcon sx={{ fontSize: 40, color: "#1DB954" }} />
      </Box>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          mb: 1,
        }}
      >
        Sign up to
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          mb: 4,
        }}
      >
        start listening
      </Typography>

      {/* Form */}
      <Box
        component="form"
        onSubmit={handleNext}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          maxWidth: 380,
          gap: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{ textAlign: "left", color: "#fff", fontWeight: 600 }}
        >
          Email address
        </Typography>

        <TextField
          placeholder="name@domain.com"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          InputLabelProps={{ style: { color: "#aaa" } }}
        />

        <Typography
          sx={{
            textAlign: "left",
            color: "#1DB954",
            fontSize: "0.875rem",
            cursor: "pointer",
            mb: 2,
          }}
        >
          Use phone number instead.
        </Typography>

        {err && (
          <Typography color="error" sx={{ mb: 1 }}>
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

        {/* Google & Apple Buttons */}
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
    </Container>
  );
}
