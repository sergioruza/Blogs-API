module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {
      categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      postId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      }
    },
    { timestamps: false, underscored: true, tableName: 'posts_categories' }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
      as: 'categories',
    });

    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
      as: 'blogPosts'
    })
  };


  return PostCategory;
}