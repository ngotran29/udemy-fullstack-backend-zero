const express = require("express");
const {
  getHomepage,
  renderSample,
  getCreateUser,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

//router.method('/route', handler)
router.get("/sample", renderSample);
router.get("/", getHomepage);

router.get("/create", getCreateUser);
router.post("/create-user", postCreateUser);

module.exports = router;
