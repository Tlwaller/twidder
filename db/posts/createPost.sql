INSERT INTO posts (authorid, postcontent, likes)
VALUES ($1, $2 , 0)
RETURNING postcontent;