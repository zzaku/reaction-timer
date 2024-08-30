const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const timerRoutes = require('./routes/timerRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/timer', timerRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));