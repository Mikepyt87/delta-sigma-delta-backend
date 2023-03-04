import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import deltaSigmaDeltaRouter from "./routes/deltaSigmaDeltaRouter";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/shoutouts", deltaSigmaDeltaRouter);
export const api = functions.https.onRequest(app);
