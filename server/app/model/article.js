'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

    const Article = app.model.define('article', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        title: STRING(1024),
        content: TEXT,
        create_id: INTEGER,
        create_by: STRING(2048),
        created_at: DATE,
        updated_at: DATE,
    });

    return Article;
}