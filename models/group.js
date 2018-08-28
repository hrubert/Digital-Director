'use strict';
module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    name: DataTypes.STRING,
    teacher: DataTypes.STRING,
    meetingRoom: DataTypes.STRING,
    meetingDates: DataTypes.STRING,
    meetingTime: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  group.associate = function(models) {
    // associations can be defined here
    group.belongsToMany(models.student, {through: 'studentgroup'});
  };
  return group;
};