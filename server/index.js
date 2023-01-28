const express = require('express');
const faucetpay = require('faucetpay');
const app = express();

app.use(express.json());

app.post('/send', async (req, res) => {
  try {
    const { address, amount } = req.body;
    const api = faucetpay.create({apiKey: process.env.API_KEY});
    const send = await api.send({
      to: address,
      value: amount,
      currency: 'BTC',
    });
    res.json({ message: 'Transaction successful' });
  } catch (error) {
    res.json({ message: 'Transaction failed' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));