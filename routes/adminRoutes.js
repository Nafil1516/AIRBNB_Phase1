const express = require("express");
const { verifyAdmin, verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// Public route
router.get("/public", (req, res) => {
  res.json({ message: "This is a public route" });
});

// Admin-only route
router.get("/dashboard", verifyAdmin, (req, res) => {
  res.json({ message: "Welcome to the admin dashboard" });
});

// General user route (requires token)
router.get("/profile", verifyToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.role} user!` });
});

module.exports = router;
