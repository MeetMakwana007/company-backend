const People = require("../models/peopleModel");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

// @desc    Getting people counts
// @route   POST /api/people/details
// @access  Private

const getDetails = async (req, res) => {
  const { _id } = req.user;
  try {
    const { _doc } = await People.findOne({ user_id: _id });
    const { male, female, boy, girl } = _doc;
    res.json({
      data: { male, female, boy, girl },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update existing people details
// @route   PATCH /api/people/modify
// @access  Private
const updateDetails = async (req, res) => {
  const { male, female, girl, boy } = req.body;

  try {
    await People.findOneAndUpdate(
      { user_id: req.user._id },
      { male, female, girl, boy },
      { new: true, upsert: true }
    );
    res.status(200).json({
      message: "Details updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDetails, updateDetails };
