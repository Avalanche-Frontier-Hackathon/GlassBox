const express = require('express');
const app = express();
const port = 3000;

const AvalancheService = require('./avalancheService'); // Adjust the path accordingly

// to be Replaced soon with the actual Avalanche API key and network
const apiKey = '<AVALANCHE_API_KEY>';
const network = '<AVALANCHE_NETWORK>';

const avalancheService = new AvalancheService(apiKey, network);

app.get('/', (req, res) => {
  res.send('Welcome to your loyalty program backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
