import { Schema, model } from "mongoose";

const USerSchema = new Schema(
  {
    name: String,
    techs: [String],
  },
  {
    timestamps: true,
  }
);

export default model("User", USerSchema);
