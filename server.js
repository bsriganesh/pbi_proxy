require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", req.body, {
      headers: {
                Authorization: `Bearer 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`,
       "Content-Type": "application/json",
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(80, () => console.log("Proxy listening on port 80"));
