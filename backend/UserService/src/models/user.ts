import { DataTypes, Model, Sequelize } from "sequelize";

class User extends Model {
  public id!: number;
  public email!: string;
  public firstName!: string;
  public lastName!: string;
  public phone!: string;
}

export const initUserModel = (sequelize: Sequelize) => {
  User.init(
    {
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize, modelName: "User" }
  );
};

export default User;
