const article = (sequelize, DataTypes) => {
  const ARTICLES = sequelize.define(
    'ARTICLES',
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },
      CONTENTS: {
        type: DataTypes.TEXT,
      },
    },
    {
      freezeTableName: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
    },
  );

  ARTICLES.associate = models => {
    ARTICLES.belongsTo(models.admin, {
      forignKey: 'WRITER',
      target: 'ID',
    });
  };

  return ARTICLES;
};

export default article;