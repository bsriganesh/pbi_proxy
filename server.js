require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//Apply CORS with wildcard
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
  }));

app.use(express.json());

app.post("/api/chat", async (req, res) => {
  console.log("Entered")
  try {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", req.body, {
      headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
       "Content-Type": "application/json",
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(8080, () => console.log("Proxy listening on port 8080"));
