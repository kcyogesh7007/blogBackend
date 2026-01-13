const {
  createBlog,
  getBlogs,
  getBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/bookController");

const router = require("express").Router();

router.route("/blogs").post(createBlog).get(getBlogs);
router.route("/blogs/:id").get(getBlog).delete(deleteBlog).patch(updateBlog);

module.exports = router;
