SELECT * FROM posts
WHERE authorid = ANY($1);