const jwt = require("jsonwebtoken");

// Middleware to verify token and extract user information
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Bearer header
  if (!token) {
    return res.status(401).json({ message: "No token provided, access denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info (e.g., id, role) to request object
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

// Middleware to check admin role
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }
    next();
  });
};

// Middleware to check user role (optional for additional routes)
const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role !== "user" && req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Users only" });
    }
    next();
  });
};

module.exports = {
  verifyToken,
  verifyAdmin,
  verifyUser,
};
