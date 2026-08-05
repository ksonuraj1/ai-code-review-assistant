import dotenv from "dotenv";

dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
console.log(process.env.GEMINI_API_KEY);
console.log("Groq Key:", process.env.GROQ_API_KEY?.slice(0, 10));
