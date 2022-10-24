module.exports = (req, res) => {
  const user = req.body;
  res.status(200).json({ message: `user ${user.username} logging in` });
};