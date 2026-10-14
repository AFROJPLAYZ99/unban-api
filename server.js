const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API Server Chal Raha Hai! Use /id?unben=YOUR_ID');
});


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
