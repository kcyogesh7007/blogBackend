const { blog } = require("../database/database");

exports.createBlog = async (req, res) => {
  const { blogTitle, blogDescription, blogAuthor } = req.body;
  await blog.create({
    blogTitle,
    blogAuthor,
    blogDescription,
  });
  res.status(200).json({
    message: "Blog created successfully",
  });
};

exports.getBlogs = async (req, res) => {
  const blogs = await blog.findAll();
  res.status(200).json({
    message: "Blogs fetched successfully",
    data: blogs,
  });
};

exports.getBlog = async (req, res) => {
  const { id } = req.params;
  const singleBlog = await blog.findByPk(id);
  res.status(200).json({
    message: "Blog fetch successfully",
    data: singleBlog,
  });
};

exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  await blog.destroy({
    where: {
      id,
    },
  });
  res.status(200).json({
    message: "Blog deleted successfully",
  });
};

exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { blogTitle, blogDescription, blogAuthor } = req.body;
  const blogs = await blog.update(
    { blogTitle, blogDescription, blogAuthor },
    {
      where: {
        id,
       
      }, returning: true,
    }
  );
  res.status(200).json({
    message: "Blog updated successfully",
    data: blogs,
  });
};
