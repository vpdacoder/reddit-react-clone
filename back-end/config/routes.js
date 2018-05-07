var express = require('express');
var router = express.Router();
var textPostsController = require('../controllers/textPosts');
var commentsController = require('../controllers/comments');

router.get('/', (req, res) => {
  res.json('welcome to the redit clone backend!');
});

//Post Routes
router.get('/api/posts', textPostsController.index);
router.post('/api/posts', textPostsController.create);
router.get('/api/posts/:post_id', textPostsController.show);
router.put('/api/posts/:post_id', textPostsController.update);
router.delete('/api/posts/:post_id', textPostsController.destroy);

//Comment Routes
router.post('/api/posts/:post_id/comments', commentsController.create);
router.put('/api/comments/:comment_id', commentsController.update);


module.exports = router;
