INSERT INTO posts (authorid, authorname, postcontent)
VALUES ($1, $2, $3)
RETURNING postcontent;