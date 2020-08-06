INSERT INTO users (username, hash, month, day, year) values ($1, $2, $3, $4, $5);

SELECT * FROM users WHERE username = $1;