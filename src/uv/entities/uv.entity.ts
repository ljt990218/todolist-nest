import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import { User } from '../../user/entities/user.entity'

@Entity()
export class UV {
  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
  userId: number

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User

  @Column({ default: 1 })
  visitCount: number

  @Column({ type: 'varchar', length: 50 })
  ipAddress: string

  @CreateDateColumn({ type: 'timestamp' })
  lastVisitTime: Date
}
