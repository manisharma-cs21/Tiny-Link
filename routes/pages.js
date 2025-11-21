const express = require("express");
const router = express.Router();
const Link = require("../models/Link");

router.get("/", async (_req, res) => {
  const links = await Link.find().sort({ createdAt: -1 });
  res.render("layout", { viewContent: "dashboard", links });
});

router.get("/code/:code", async (req, res) => {
  const link = await Link.findOne({ code: req.params.code });
  if (!link) return res.status(404).render("404");
  res.render("layout", { viewContent: "stats", link });
});

router.get("/healthz", (_req, res) => {
  res.json({ ok: true, version: "1.0" });
});

module.exports = router;
