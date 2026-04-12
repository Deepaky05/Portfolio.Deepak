const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "deepakyogi00574@gmail.com",
    pass: "tkbxngvtqhmnwmkk"
  }
});
app.get("/", (req, res) => {
  res.send("🔥 Backend working perfectly");
});
// 📩 API route
app.post("/send-mail", async (req, res) => {
  const { name, email, mobile, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: "your_email@gmail.com",
      subject: subject,
      text: `
Name: ${name}
Email: ${email}
Mobile: ${mobile}

Message:
${message}
      `
    });

    res.json({ success: true });

  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});