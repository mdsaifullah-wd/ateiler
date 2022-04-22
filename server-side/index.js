const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.local || 3001;

// Use Middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log('Server Running...');
});
