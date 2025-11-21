const express = require("express");
const router = express.Router();
const Link = require("../models/Link");

router.get("/:code", async (req, res) => {
  const link = await Link.findOne({ code: req.params.code });

  if (!link) return res.status(404).render("404");

  link.clicks += 1;
  link.lastClicked = new Date();
  await link.save();

  return res.redirect(302, link.url);
});

module.exports = router;
