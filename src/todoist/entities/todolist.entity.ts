import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class TodoList {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: number

  @Column()
  todo: string

  @Column()
  state: number = 0

  @Column()
  stateText: string

  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date

  @BeforeInsert()
  @BeforeUpdate()
  updateStateText() {
    this.stateText = this.getStateText(this.state)
  }

  private getStateText(state: number): string {
    switch (state) {
      case 0:
        return '未完成'
      case 1:
        return '进行中'
      case 2:
        return '已完成'
      default:
        return '未知状态'
    }
  }
}
