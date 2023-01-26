module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {
      category_id: {
        type: DataTypes.INTEGER,
      },
      post_id: {
        type: DataTypes.INTEGER,
      }
    },
    { timestamps: false }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'post_id',
      otherKey: 'category_id',
      through: PostCategory,
      as: 'categories',
    });
  };

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostCategory,
      as: 'blog_posts'
    })
  }

  return PostCategory;
}