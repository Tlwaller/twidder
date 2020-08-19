require("dotenv").config();
const express = require("express");
const session = require("express-session");
const app = express();
const massive = require("massive");
const authController = require("./Controllers/AuthController");
const postController = require("./Controllers/PostController");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

if ("development" == app.get("env")) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
}).catch(err => console.log(err));

//auth
app.get("/auth/user", authController.getUser);
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);
app.post("/auth/logout", authController.logout);

//posts
app.get("/api/posts", postController.getPosts);
app.get("/api/feed", postController.getMyFeed);
app.post("/api/posts", postController.createPost);
app.put("/api/posts", postController.editPost);
app.delete("/api/posts", postController.deletePost);
app.post("/api/posts/likes", postController.like);

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));