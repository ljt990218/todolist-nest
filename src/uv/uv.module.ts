import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UV } from './entities/uv.entity'
import { UvService } from './uv.service'
import { UvController } from './uv.controller'

@Module({
  imports: [TypeOrmModule.forFeature([UV])],
  providers: [UvService],
  controllers: [UvController],
  exports: [UvService]
})
export class UvModule {}
