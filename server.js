require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  console.log("Entered")
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
