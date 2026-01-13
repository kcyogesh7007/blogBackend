const blogModel = (sequelize, DataTypes) => {
  const Blog = sequelize.define("blog", {
    blogTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    blogDescription: {
      type: DataTypes.STRING,
    },
    blogAuthor: {
      type: DataTypes.STRING,
    },
  });
  return Blog;
};

module.exports = blogModel;
