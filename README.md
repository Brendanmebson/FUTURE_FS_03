# 🎧 Spotify 2.0

A modern full-stack Spotify clone built with React, Material-UI, Supabase, and inspired by Figma-crafted designs.
Seamlessly blending aesthetics and functionality — browse, play, and vibe to your favorite tunes like a pro.

## 🚀 Tech Stack
- Layer	Technology
- Frontend: React + Vite
- UI Library:	Material-UI (MUI)
- Design:	Figma Make
- Backend / Auth:	Supabase
- Database:	Supabase Postgres
- Deployment:	Vercel / Netlify (Frontend) + Supabase (Backend)
  
## 🧠 Project Overview

Spotify 2.0 is a music streaming platform clone that mimics the look and feel of Spotify with a personalized UI twist.
Users can log in, explore playlists, view artists, and interact with music collections — all powered by Supabase.

### ✨ Features

- 🎵 User Authentication (Sign up, Login, Logout) via Supabase Auth

- 🧑‍🎤 Personalized Dashboard showing user playlists and recently played songs

- 🎧 Music Playback Interface with real-time updates

- 🔍 Search Functionality for songs, albums, and artists

- 💾 Supabase Database Integration for persistent user data

- 🎨 Fully responsive UI designed with Figma Make and built using MUI components

- ⚡ Optimized performance with Vite + React hooks

## 🧩 Folder Structure
```
spotify2.0/
│
├── src/
│   ├── components/      # Reusable UI components (Navbar, Player, Sidebar, etc.)
│   ├── pages/           # App pages (Home, Login, Profile, etc.)
│   ├── layouts/         # Layout wrappers and navigation structures
│   ├── assets/          # Images, icons, etc.
│   ├── hooks/           # Custom React hooks
│   ├── supabaseClient.js # Supabase configuration
│   └── App.jsx          # Main entry point
│
├── public/
│   └── favicon.ico
│
├── .env                 # Supabase environment variables
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup
1. Clone the Repository
```
git clone https://github.com/<your-username>/spotify2.0.git
cd spotify2.0
```
2. Install Dependencies
```
npm install
or
yarn install
```

3. Configure Supabase

- Create a new project on Supabase

- Copy your Project URL and anon/public key

- Create a .env file in the root directory and add:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```
4. Run the App
```
npm run dev
```

Then open http://localhost:5173
 🎉

## 🎨 Design Reference

All pages were crafted in Figma Make before implementation.
Design inspired by Spotify’s clean interface but reimagined for a modern, minimal experience with MUI aesthetics.


## 🌍 Deployment

- Frontend: Deployed on Vercel

- Backend: Powered by Supabase

- Simply connect your GitHub repo to Vercel — it auto-detects Vite + React builds 💨

## 💡 Future Enhancements

- 🔁 Music streaming from external APIs (Spotify Web API or custom backend)

- 🧠 AI-based music recommendations

- 💬 Real-time chat & comments on playlists

- 📱 Mobile-friendly PWA version

- 👨‍💻 Author: Kamsiyochukwu Brendan Mebuge

- 💼 LinkedIn

- ✉️ brendanmebson@gmail.com

## ⚡ License

This project is open source under the MIT License
.

🎶 “Code. Deploy. Vibe. Repeat.”

Because good code deserves good music. 🎧💚
