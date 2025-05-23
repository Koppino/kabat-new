import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import jwt from "jsonwebtoken";
export const login = async (req, res) => {
  console.log("login");
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password." });
    }
    generateTokenAndSetCookie(user._id, res);
    const userId = user._id;
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
      token: token,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      res.status(400).json({ error: "All fields are required." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password dont match." });
    }

    const existUser = await User.findOne({ username });
    if (existUser) {
      return res.status(400).json({ error: "Username already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      const userId = newUser._id;
      const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
      });
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
        token: token,
      });
    } else {
      res.status(400).json({ error: "Invalid user data." });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully." });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
