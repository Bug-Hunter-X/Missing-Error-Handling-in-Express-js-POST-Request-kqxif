const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user) {
    return res.status(400).send({ error: 'Missing user data' });
  }
  //Further validation can be added here
  console.log('Creating user:', user);
  res.status(201).send(user);
});
app.listen(3000, () => console.log('Server listening on port 3000'));