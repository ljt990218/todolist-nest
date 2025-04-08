import { Controller, Post, Body, Get, Param, Req } from '@nestjs/common'
import { UvService } from './uv.service'
import { CreateUvDto } from './dto/create-uv.dto'

@Controller('api/uv')
export class UvController {
  constructor(private readonly uvService: UvService) {}

  @Post('record')
  async recordVisit(@Body() createUvDto: CreateUvDto, @Req() request) {
    // 获取真实IP地址
    const ipAddress = request.ip || request.connection.remoteAddress
    createUvDto.ipAddress = ipAddress
    return this.uvService.recordVisit(createUvDto)
  }

  @Get('stats/:userId')
  getVisitStats(@Param('userId') userId: string) {
    return this.uvService.getVisitStats(+userId)
  }
}
