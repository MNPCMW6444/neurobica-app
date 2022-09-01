import mongoose from "mongoose";

const userTests = new mongoose.Schema(
  {
    User: { type: Number, required: true, unique: true },
    userTestTutorial: { type: Boolean, required: true },
    attentionScore: {
      type: Number,
      required: true,
    },
    memoryScore: {
      type: Number,
      required: true,
    },
    flexabilityScore: {
      type: Number,
      required: true,
    },
    creativityScore: {
      type: Number,
      required: true,
    },
    testScore: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", userTests);
