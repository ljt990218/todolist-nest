import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { VersioningType } from '@nestjs/common'
import { HttpExceptionFilter } from './common/filter'
import { ResponseInterceptor } from './common/response'
import { RequestInterceptor } from './common/request'
import { JwtService } from '@nestjs/jwt' // 确保导入 JwtService
import * as cors from 'cors'
// import * as os from 'os'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.enableVersioning({
    type: VersioningType.URI
  })
  app.use(cors())
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new ResponseInterceptor())
  app.useGlobalInterceptors(new RequestInterceptor(app.get(JwtService)))

  const port = 3086
  app.listen(port)

  // 获取本地 IP 地址
  // const networkInterfaces = os.networkInterfaces()
  // const host =
  //   Object.values(networkInterfaces)
  //     .flat()
  //     .find((iface) => iface.family === 'IPv4' && !iface.internal)?.address ||
  //   '127.0.0.1'

  // app.listen(port, host, () => {
  //   console.log(`Server is running on http://${host}:${port}`)
  // })
}
bootstrap()
