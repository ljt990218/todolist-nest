import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert
} from 'typeorm'
import * as bcrypt from 'bcrypt'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number

  @Column({ default: '' })
  name: string

  @Column({ default: 18 })
  age: number

  @Column({ default: '' })
  phone: string

  @Column({ unique: true })
  account: string

  @Column({ unique: true })
  password: string

  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password)
  }

  @BeforeInsert()
  setName() {
    this.name = `user_${this.account}`
  }
}
