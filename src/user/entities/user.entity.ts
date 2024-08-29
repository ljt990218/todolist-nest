import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  name: string

  @Column()
  age: number

  @Column()
  phone: string

  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date
}
