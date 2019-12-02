const bcrypt = require("bcryptjs");

module.exports = {
  getUser: (req, res) => {
    if (req.session.user) {
      res.status(200).json(req.session.user);
    } else {
      res.sendStatus(401);
    }
  },

  register: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");

    const foundUser = await db.auth.checkForUsername(username);

    if (foundUser[0]) {
      res.status(409).json("That username is taken");
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const newUser = await db.auth.registerUser(username, hash);

      req.session.user = {
        id: newUser[0].userid,
        username: newUser[0].username
      };

      res.status(200).json(req.session.user);
    }
  }
};
