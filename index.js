const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// A tiny "build info" object so viewers can SEE a new deploy happened —
// great for the live demo: change VERSION, push, and show the running
// container's response change after the pipeline finishes.
const VERSION = '1.0.0';

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from the DevOps demo app!',
    version: VERSION,
    hostname: require('os').hostname(),
    servedAt: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Demo app listening on port ${PORT}`);
});
