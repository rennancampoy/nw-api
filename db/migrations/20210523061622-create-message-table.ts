import { DataTypes, QueryInterface } from 'sequelize';

export async function up(q: QueryInterface) {
  await q.createTable('messages', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    target_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    media: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }).catch((e) => {
    console.log(e)
  })
}