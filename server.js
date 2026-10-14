const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Homepage ke liye (ab Cannot GET / nahi aayega)
app.get('/', (req, res) => {
  res.json({
    status: "active",
    message: "Server chal raha hai! Use /id?unben=YOUR_ID"
  });
});

// ID check karne ke liye
app.get('/id', (req, res) => {
  const { unben } = req.query;

  if (!unben) {
    return res.status(400).json({
      status: "error",
      message: "unben query parameter missing hai"
    });
  }

  res.json({
    status: "success",
    unban_id: unben,
    state: "unbanned",
    message: "ID successfully processed"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
