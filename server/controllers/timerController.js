const Timer = require('../models/Timer');

exports.submitReactionTime = async (req, res) => {
  try {
    const { userId, time } = req.body;
    const reactionTime = new Timer({ user_id: userId, time });
    await reactionTime.save();
    res.status(201).json({ message: 'Reaction time submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getReactionTimes = async (req, res) => {
  try {
    const { userId } = req.params;
    const times = await Timer.find({ user_id: userId }).sort({ time: 1 });
    res.json(times);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
