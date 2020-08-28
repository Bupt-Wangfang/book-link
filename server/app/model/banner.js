'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

    const Banner = app.model.define('banner', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        title: STRING(1024),
        img_url: STRING(255),
        relate_id: STRING(255),
        content: TEXT,
        password: STRING(255),
        created_at: DATE,
        updated_at: DATE,
        status: STRING(50),
    });

    return Banner;
}