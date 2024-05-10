module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define(
    "Tasks",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      archived: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      tableName: "tasks",
      timestamps: false,
    }
  );
  Tasks.associate = (models) => {
    Tasks.belongsTo(models.Users, {
      foreignKey: "userId",
    });
  };
  return Tasks;
};
