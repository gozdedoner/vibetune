const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = 4000;

app.get("/api/token", async (req, res) => {
  const authString = `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`;
  const authBase64 = Buffer.from(authString).toString("base64");

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${authBase64}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    res.json({ access_token: response.data.access_token });
  } catch (error) {
    console.error(
      "Spotify token alınamadı:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Spotify token alınamadı" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend çalışıyor: http://localhost:${PORT}/api/token`);
});
