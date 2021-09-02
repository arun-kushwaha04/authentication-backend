const jwt = require("jsonwebtoken");
const User = require("../userModel");

exports.signUp = async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(user);
    const addedUser = await user.save();
    res.status(200).json({ message: "User Succesfully added to database" });
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to add user to database, Potential reason could be - Email already exists",
    });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  user.comparePassword(password, (err, result) => {
    if (err) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
    if (result === true) {
      const token = jwt.sign(
        {
          email: email,
        },
        process.env.SECRET_KEY,
        { expiresIn: "7d" }
      );
      res.status(200).json({ message: "Logged In Successfully", token: token });
    } else {
      res.status(401).json({ message: "Invalid password" });
    }
  });
};
