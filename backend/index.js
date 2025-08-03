const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
require("dotenv").config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
 
});

const userSchema = new mongoose.Schema({
  name: String,
  referralCode: String,
  totalDonations: Number
});

const leaderboardSchema = new mongoose.Schema({
  name: String,
  totalDonations: Number
});

const User = mongoose.model("User", userSchema);
const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);

// Seed dummy data if DB is empty
(async () => {
  const users = await User.find();
  if (users.length === 0) {
    await User.create({
      name: "Rudra Prasad",
      referralCode: "rudraprasad2025",
      totalDonations: 5300
    });
  }

  const leaders = await Leaderboard.find();
  if (leaders.length === 0) {
    await Leaderboard.insertMany([
      { name: "Aarav", totalDonations: 7000 },
      { name: "Rudra Prasad", totalDonations: 5300 },
      { name: "Meera", totalDonations: 4100 },
      { name: "Kiran", totalDonations: 3600 },
      { name: "Zoya", totalDonations: 2500 }
    ]);
  }
})();

app.get("/api/dashboard", async (req, res) => {
  const user = await User.findOne();
  res.json(user);
});

app.get("/api/leaderboard", async (req, res) => {
  const leaderboard = await Leaderboard.find().sort({ totalDonations: -1 });
  res.json(leaderboard);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});