import { DataTypes, Model, Sequelize } from "sequelize";

class Bussiness extends Model {
  public id!: number;
  public email!: string;
  public firstName!: string;
  public lastName!: string;
  public phone!: string;
}

export const initBussinessModel = (sequelize: Sequelize) => {
  Bussiness.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      website: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      phone: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize, modelName: "Bussiness" }
  );
};

export default Bussiness;
