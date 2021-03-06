'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(15)
      },
      lastName: {
        type: Sequelize.STRING(15)
      },
      phoneNumber: {
        type: Sequelize.STRING(10)
      },
      email: {
        type: Sequelize.STRING(320)
      },
      parentname1: {
        type: Sequelize.STRING(30)
      },
      parentname2: {
      type: Sequelize.STRING(30)
      },
      parentPhoneNumber: {
        type: Sequelize.STRING(10)
      },
      parentEmail: {
        type: Sequelize.STRING(320)
      },
      address: {
        type: Sequelize.STRING(1024)
      },
      uniformSize: {
        type: Sequelize.STRING(3)
      },
      instrument: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      teacherId: {
        type: Sequelize.STRING,
        allowNull: false   
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('students');
  }
};