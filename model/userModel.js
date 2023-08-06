module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
    
    });
    return User;
  };