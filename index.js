const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const router = require("./routes/index");

async function start() {
  try {
    router(app);
    app.listen(PORT, () => {
      console.log(`🚀 SERVER RUNNING ON http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Server error: ${error}`);
  }
}

start().then();
