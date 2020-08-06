module.exports = {
    getPost: async (req, res) => {
        const db = req.app.get("db");
        const post = await db.posts.findPost(req.body.postid);

        if(post) {
            res.status(200).json(post);
        } else res.status(404).json('Post not found');
    }
}