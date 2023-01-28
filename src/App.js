import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/send', {
        address: address,
        amount: amount
      });
      setStatus(response.data.message);
    } catch (error) {
      setStatus('Transaction failed');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
        </label>
        <label>
          Amount:
          <input type="text" value={amount} onChange={e => setAmount(e.target.value)} />
        </label>
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default App;