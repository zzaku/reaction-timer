const express = require('express');
const { submitReactionTime, getReactionTimes } = require('../controllers/timerController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/submit-reaction-time', authMiddleware, submitReactionTime);
router.get('/get-reaction-times/:userId', authMiddleware, getReactionTimes);

module.exports = router;
