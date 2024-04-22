const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB model
const Player = mongoose.model('Player', new mongoose.Schema({ name: String }));

app.get('/api/players', async (req, res) => {
    const players = await Player.find();
    res.send(players);
});

app.post('/api/players', async (req, res) => {
    const player = new Player(req.body);
    await player.save();
    res.send(player);
});

// MongoDB connection and server start
mongoose.connect('your-mongodb-atlas-url', { useNewUrlParser: true })
  .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
  .catch(err => console.error('Could not connect to MongoDB...', err));
