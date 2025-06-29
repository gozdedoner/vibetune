import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// Sayfalar
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Player from "./components/Player";
import Playlist from "./pages/Playlist";
import Search from "./pages/Search";
import Library from "./pages/Library";
import AIPlaylistPage from "./pages/AIPlaylistPage";

// Layout ve Modallar
import Layout from "./layout/Layout";
import AIPlaylistModal from "./modals/AIPlaylistModal";

// 🔗 Spotify Access Token'ı canlı backend'den al
const getAccessToken = async () => {
  try {
    const response = await fetch(
      "https://vibetune-backend-n3yo.onrender.com/api/token"
    );
    if (!response.ok) {
      throw new Error("Token alınamadı");
    }
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Spotify token alınamadı:", error);
    return null;
  }
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [spotifyToken, setSpotifyToken] = useState(null);
  const [aiPlaylist, setAiPlaylist] = useState([]);
  const navigate = useNavigate();

  const handleGenerate = async (prompt) => {
    setIsLoading(true);

    try {
      if (!spotifyToken) throw new Error("Spotify token yok.");

      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          prompt
        )}&type=track&limit=8`,
        {
          headers: {
            Authorization: `Bearer ${spotifyToken}`,
          },
        }
      );

      const data = await response.json();

      if (data.tracks && data.tracks.items) {
        setAiPlaylist(data.tracks.items);
        setIsModalOpen(false);
        navigate("/ai-playlist");
      }
    } catch (error) {
      console.error("AI playlist oluşturulamadı:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function fetchToken() {
      const token = await getAccessToken();
      if (token) {
        setSpotifyToken(token);
        console.log("🎧 Spotify Access Token:", token);
      }
    }
    fetchToken();
  }, []);

  return (
    <>
      <AIPlaylistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onGenerate={handleGenerate}
        isLoading={isLoading}
        token={spotifyToken}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Layout
              onOpenModal={() => setIsModalOpen(true)}
              spotifyToken={spotifyToken}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/player" element={<Player />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route
            path="/search"
            element={<Search spotifyToken={spotifyToken} />}
          />
          <Route path="/library" element={<Library />} />
          <Route
            path="/ai-playlist"
            element={<AIPlaylistPage playlist={aiPlaylist} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
