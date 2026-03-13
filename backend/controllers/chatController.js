const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  try {
    const { user, text } = req.body;

    const message = new Message({
      user,
      text
    });

    await message.save();

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};