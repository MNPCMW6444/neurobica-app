import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import responseResult from "../models/responseResult";

const router = express.Router();

router.post("/save", async (req, res) => {
  try {
    const { result } = req.body;
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ clientMessage: "Unauthorized" });
    if (!result) return res.status(400).json({ clientMessage: "No Result" });
    const validatedUser = jwt.verify(token, process.env.JWT_SECRET as string);
    const userId = (validatedUser as JwtPayload).id;
    const savedResponseResult = new responseResult({ owner: userId, result });
    res.json(savedResponseResult);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ serverError: "Unexpected error occurred in the server" });
  }
});

export default router;
