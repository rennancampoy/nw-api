import { AllowNull, Column, Model, NotEmpty, Table } from "sequelize-typescript"
import { Optional } from 'sequelize/types'

export type TMessage = {
  id?: number
  from: string
  target_id: string
  media: boolean
  message: string
}

interface IMessageCreation extends Optional<TMessage, 'id'> {}

@Table
export class Message extends Model<IMessageCreation, TMessage> implements TMessage {
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
