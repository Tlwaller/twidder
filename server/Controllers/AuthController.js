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
    const { username, password, month, day, year } = req.body;
    const db = req.app.get("db");

    const foundUser = await db.auth.checkForUsername(username);

    if (foundUser[0]) {
      res.status(409).json("That username is taken");
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const newUser = await db.auth.registerUser(username, hash, month, day, year);

      req.session.user = {
        userid: newUser[0].userid,
        username: newUser[0].username
      };

      res.status(200).json(req.session.user);
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");

    const foundUser = await db.auth.checkForUsername(username);

    if (!foundUser[0]) {
      res.status(401).json("Inncorrect username/password");
    } else {
      const isAuthenticated = bcrypt.compareSync(
        password,
        foundUser[0].password
      );

      if (!isAuthenticated) {
        return res.status(401).json("Inncorrect username/password");
      } else {
        req.session.user = {
          userid: foundUser[0].userid,
          username: foundUser[0].username
        };
        res.status(200).json(req.session.user);
      }
    }
  },

  logout: async (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  }
};
