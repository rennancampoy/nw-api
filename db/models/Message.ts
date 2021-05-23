import { Model, DataTypes, Sequelize, BuildOptions } from 'sequelize';

interface Message extends Model {
  readonly id: string
  from: string
  target_id: string
  media: boolean
  message: string
  created_at: Date
  updated_at: Date
}

type MessageStatic = typeof Model & {
  new (values?: Partial<Message>, options?: BuildOptions): Message
}

export function build(sequelize: Sequelize) {
  const message = sequelize.define('message', {
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
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }) as MessageStatic
  return message
}
