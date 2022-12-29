"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const responseResult_1 = __importDefault(require("../models/responseResult"));
const router = express_1.default.Router();
router.post("/save", async (req, res) => {
    try {
        const { result } = req.body;
        const token = req.cookies.jwt;
        if (!token)
            return res.status(401).json({ clientMessage: "Unauthorized" });
        if (!result)
            return res.status(400).json({ clientMessage: "No Result" });
        const validatedUser = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const userId = validatedUser.id;
        const savedResponseResult = new responseResult_1.default({ owner: userId, result });
        res.json(savedResponseResult);
    }
    catch (err) {
        console.error(err);
        res
            .status(500)
            .json({ serverError: "Unexpected error occurred in the server" });
    }
});
exports.default = router;
