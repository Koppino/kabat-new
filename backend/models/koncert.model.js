import mongoose from "mongoose";

const KoncertSchema = mongoose.Schema(
  {
    mesto: String,
    text: String,
    datum: Date,
    den: String,
    datumString: String,
    denVTydnu: String,
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Koncert = mongoose.model("Koncert", KoncertSchema);

export default Koncert;
