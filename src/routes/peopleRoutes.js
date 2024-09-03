const express = require("express");
const {
  getDetails,
  updateDetails,
} = require("../controllers/peopleController");
const { checkJwtToken } = require("../middleware/tokenVerifier");

const router = express.Router();

router.get("/details", checkJwtToken, getDetails);

router.patch("/modify", checkJwtToken, updateDetails);

module.exports = router;
