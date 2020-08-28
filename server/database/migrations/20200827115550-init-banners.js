'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, STRING, TEXT } = Sequelize;
    await queryInterface.createTable('banners', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(1024), // 标题
      img_url: STRING(1024), // banner图片地址
      relate_id: INTEGER, // 关联的文章id
      content: TEXT, // 文章内容
      created_at: DATE,
      updated_at: DATE,
      status: STRING(50)
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('banners');
  }
};
