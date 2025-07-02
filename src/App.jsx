// src/App.jsx
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
import Signup from "./pages/Signup";

// Layout ve Modal
import Layout from "./layout/Layout";
import AIPlaylistModal from "./modals/AIPlaylistModal";

// LocalStorage yardımcıları
import {
  getLibraryFromStorage,
  saveLibraryToStorage,
} from "./utils/libraryStorage";

// Token alma (backend'den güvenli şekilde)
const getAccessToken = async () => {
  try {
    const response = await fetch(
      "https://vibetune-backend-n3yo.onrender.com/api/token"
    );
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
  const [library, setLibrary] = useState(() => getLibraryFromStorage());
  const [currentTrack, setCurrentTrack] = useState(null);

  const navigate = useNavigate();

  // Kitaplık güncelleme
  useEffect(() => {
    saveLibraryToStorage(library);
  }, [library]);

  // Spotify token'ı alma
  useEffect(() => {
    async function fetchToken() {
      const token = await getAccessToken();
      if (token) {
        setSpotifyToken(token);
      }
    }
    fetchToken();
  }, []);

  // AI playlist oluştur
  const handleGenerate = async (prompt) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          prompt
        )}&type=track&limit=8`,
        {
          headers: { Authorization: `Bearer ${spotifyToken}` },
        }
      );
      const data = await response.json();
      if (data.tracks?.items) {
        setAiPlaylist(data.tracks.items);
        setIsModalOpen(false);
        navigate("/ai-playlist");
      }
    } catch (error) {
      console.error("AI Playlist oluşturulamadı:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* AI Playlist Modal */}
      <AIPlaylistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onGenerate={handleGenerate}
        isLoading={isLoading}
        token={spotifyToken}
      />

      {/* Yönlendirme yapısı */}
      <Routes>
        {/* Layout'suz sayfa: Signup */}
        <Route path="/signup" element={<Signup />} />

        {/* Layout içindeki sayfalar */}
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
          <Route
            path="/player"
            element={<Player currentTrack={currentTrack} />}
          />
          <Route
            path="/playlist"
            element={
              <Playlist
                playlist={aiPlaylist}
                library={library}
                setLibrary={setLibrary}
                setCurrentTrack={setCurrentTrack}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                spotifyToken={spotifyToken}
                library={library}
                setLibrary={setLibrary}
                setCurrentTrack={setCurrentTrack}
              />
            }
          />
          <Route
            path="/library"
            element={<Library library={library} setLibrary={setLibrary} />}
          />
          <Route
            path="/ai-playlist"
            element={
              <AIPlaylistPage
                playlist={aiPlaylist}
                library={library}
                setLibrary={setLibrary}
                setCurrentTrack={setCurrentTrack}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

// Router sarmalayıcı
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
