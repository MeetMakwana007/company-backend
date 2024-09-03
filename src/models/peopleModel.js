const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    male: {
      type: Number,
      required: true,
    },
    female: {
      type: Number,
      required: true,
    },
    boy: {
      type: Number,
      required: true,
    },
    girl: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const People = mongoose.model("People", peopleSchema);

module.exports = People;
