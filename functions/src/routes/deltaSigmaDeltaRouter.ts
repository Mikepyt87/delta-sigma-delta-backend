import express from "express";
import { getClient } from "../db";
import Member from "../models/Member";

const deltaSigmaDeltaRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

deltaSigmaDeltaRouter.get("/", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<Member>("shoutouts").find();
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default deltaSigmaDeltaRouter;
