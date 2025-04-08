import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UV } from './entities/uv.entity'
import { CreateUvDto } from './dto/create-uv.dto'

@Injectable()
export class UvService {
  constructor(
    @InjectRepository(UV)
    private readonly uvRepository: Repository<UV>
  ) {}

  async recordVisit(createUvDto: CreateUvDto) {
    const { userId, ipAddress } = createUvDto

    // 查找今天该用户是否已经访问过
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const uvRecord = await this.uvRepository.findOne({
      where: {
        userId,
        ipAddress,
        lastVisitTime: today
      }
    })

    if (uvRecord) {
      // 如果今天已经访问过，增加访问次数
      uvRecord.visitCount += 1
      return this.uvRepository.save(uvRecord)
    } else {
      // 如果今天还没访问过，创建新记录
      const newUv = this.uvRepository.create(createUvDto)
      return this.uvRepository.save(newUv)
    }
  }

  async getVisitStats(userId: number) {
    // 获取用户总访问次数
    const totalVisits = await this.uvRepository
      .createQueryBuilder('uv')
      .where('uv.userId = :userId', { userId })
      .select('SUM(uv.visitCount)', 'total')
      .getRawOne()

    // 获取用户今日访问次数
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const todayVisits = await this.uvRepository
      .createQueryBuilder('uv')
      .where('uv.userId = :userId', { userId })
      .andWhere('uv.lastVisitTime >= :today', { today })
      .select('SUM(uv.visitCount)', 'today')
      .getRawOne()

    return {
      totalVisits: parseInt(totalVisits?.total || '0'),
      todayVisits: parseInt(todayVisits?.today || '0')
    }
  }
}
