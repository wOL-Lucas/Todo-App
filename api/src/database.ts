import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const db = process.env.MYSQL_DATABASE || 'Todo';
const user = process.env.MYSQL_USER || '';
const password = process.env.MYSQL_PASSWORD || '';
const host = process.env.MYSQL_HOST || 'localhost';

const sequelize = new Sequelize( db, user, password,{
  host:  host,
  dialect: 'mysql'
});


export default sequelize;
