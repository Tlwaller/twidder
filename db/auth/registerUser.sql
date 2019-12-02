INSERT INTO users (username, password) values ($1, $2);

SELECT * FROM users WHERE username = $1;