module.exports = {
    getPosts: async (req, res) => {
        const db = req.app.get("db");
        const posts = await db.posts.getPosts();
        res.status(200).json(posts);
    },

    getMyFeed: async (req, res) => {
        const db = req.app.get("db");

        if(req.session.user) {
            let [{following}] = await db.auth.getFollows(req.session.user.userid);
            if(following) {
                const posts = await db.posts.getMyFeed(`{${following}}`);
                res.status(200).json(posts);
            } else res.status(200).json('No posts to show');
        } else res.sendStatus(401);
    },

    createPost: async (req, res) => {
        const db = req.app.get("db");

        if(req.session.user) {
            if(req.body.postContent) {
                const post = db.posts.createPost(req.session.user.userid, req.body.postContent);
                res.status(200).json(post);
            } else res.status(403).json("Nothing to post");
        } else res.status(403).json("Not signed in");
    },

    editPost: async (req, res) => {
        const db = req.app.get("db");
        const [post] = await (db.posts.findPost(req.body.postid));

        if(!req.session.user) {
            res.sendStatus(401);
        } else if(!post) {
            res.sendStatus(404);
        } else if(req.session.user.userid === post.authorid) {
            db.posts.editPost(req.body.newContent, req.body.postid);
            res.status(200).json("Post edited");
        } else res.sendStatus(401);
    },

    deletePost: async (req,res) => {
        const db = req.app.get("db");
        const {postid} = req.body;
        const [post] = await (db.posts.findPost(postid));

        if(!req.session.user) {
            res.sendStatus(401);
        } else if(!post) {
            res.sendStatus(404);
        } else if(req.session.user.userid === post.authorid) {
            db.posts.deletePost(postid);
            res.status(200).json('Post removed')
        } else res.sendStatus(401);
    }
}