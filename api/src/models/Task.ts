import sequelize from '@database';
import { Model, DataTypes } from 'sequelize';
import User from './User';


class Task extends Model {
  readonly id!: number;
  public title!: string;
  public description!: string;
  public status!: string;
  public userId!: number;
  public created_at!: Date;
};

Task.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  description: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  status: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  created_at: {
    type: new DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }
},{
    tableName: 'tasks',
    sequelize,
  }
);

User.hasMany(Task, {
  foreignKey: 'userId',
  as: 'tasks',
});

Task.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

export default Task;
