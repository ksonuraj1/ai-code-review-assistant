import express from "express";
import cors from "cors";
import router from "./routes/review.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/review", router);

export default app;
