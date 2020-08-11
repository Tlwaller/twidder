INSERT INTO posts (authorid, postcontent)
VALUES ($1, $2)
RETURNING postcontent;