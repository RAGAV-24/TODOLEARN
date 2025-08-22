const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/Login/register");

exports.LoginUser = async (req, res) => {
  console.log(req);
  const { email, password } = req.body;
  console.log("Login attempt:", email, password);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "No user with this login credential" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, message: "Login successful" });
  } catch (err) {
    console.error("Error in login API:", err);
    return res.status(500).json({ error: err.message });
  }
};
