import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hi i am listening ');
});

app.post('/login', (req, res) => {
  res.send('Login successful');
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
