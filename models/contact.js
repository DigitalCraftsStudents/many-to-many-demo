'use strict';

/*
Contact is a "junction" table ("linking").
Each entry in the Contacts table represents a "friendship",
which is a relationship between two different Users.

You set up relationships in two steps in the model:
1. Modify the .init(), adding the "references" for your FK
2. Fill out the associate() function

*/


const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // This is how Sequelize knows to create "magic methods"
      // These are functions that can automatically pull
      // related data.
      // For example: If I have a User object
      // I can call `await user.getContacts()` to get an
      // Array of this user's Contacts.
      Contact.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      Contact.belongsTo(models.User, {
        foreignKey: 'contact_id'
      });
    }
  };
  // 1. First, tell Sequelize that the INTEGER points
  // to a User's id field
  Contact.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        // what does user_id point to?
        key: 'id'
      }
    },
    contact_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};