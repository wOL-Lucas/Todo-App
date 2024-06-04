import sequelize from '@database';
import { Model, DataTypes } from 'sequelize';

class User extends Model {
  readonly id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
};

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  password: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  created_at: {
    type: new DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }},{
    tableName: 'users',
    sequelize,
  });


sequelize.sync({ force: false }).then(() => console.log('User table created'));
export default User;
