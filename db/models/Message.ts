import { AllowNull, Column, Model, NotEmpty, Table } from "sequelize-typescript"
import { Optional } from 'sequelize/types'

interface IMessage {
  id?: number
  from: string
  target_id: string
  media: boolean
  message: string
}

interface IMessageCreation extends Optional<IMessage, 'id'> {}

@Table
export class Message extends Model<IMessageCreation, IMessage> implements IMessage {
  @AllowNull(false)
  @NotEmpty
  @Column
  from: string

  @AllowNull(false)
  @NotEmpty
  @Column
  target_id: string

  @AllowNull(false)
  @NotEmpty
  @Column
  media: boolean

  @AllowNull(false)
  @NotEmpty
  @Column
  message: string
}
