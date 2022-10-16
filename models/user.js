'use strict';
const { Model } = require('sequelize');
import { hashPassword } from '../helper/bcrypt.js';
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Photo);
      this.hasMany(models.Comment);
    }
  }
  User.init({
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_image_url: DataTypes.TEXT,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, opt) => {
        const hashedPassword = hashPassword(user.password);
        user.password = hashedPassword;
      }
    }
  });
  return User;
};