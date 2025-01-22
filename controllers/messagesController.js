const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

module.exports = {
  showMessages: function (req, res) {
    res.render('../views/index.ejs', { messages });
  },
  addMessage: function (req, res) {
    const { text, user } = req.body;
    const message = { text, user, added: new Date() };
    messages.push(message);
    res.redirect('/');
  },
  getMessages: function (req, res) {
    res.render('../views/form.ejs');
  },
};
