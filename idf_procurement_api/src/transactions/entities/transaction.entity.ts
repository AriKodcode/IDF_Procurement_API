import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'transaction',
  timestamps: false,
})
export class Transaction extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pricePerUnit: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  hasImage: boolean;
}
