import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'
import { ConfigModule } from '@nestjs/config'
import { DatabaseConfigDev } from '../DatabaseConfigDev'
import { DatabaseConfigProd } from '../DatabaseConfigProd'
import { UserModule } from './user/user.module'
import { TodoistModule } from './todoist/todolist.module'
import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'

require('dotenv').config()

const databaseConfig =
  process.env.NODE_ENV === 'production' ? DatabaseConfigProd : DatabaseConfigDev

// console.log('NODE_ENV', process.env.NODE_ENV)
// console.log(databaseConfig)

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
        path.resolve(__dirname, '../.env.development')
      ]
    }),
    TypeOrmModule.forRoot({
      type: databaseConfig.type as any,
      host: databaseConfig.host,
      port: databaseConfig.port,
      username: databaseConfig.username,
      password: databaseConfig.password,
      database: databaseConfig.database,
      retryDelay: databaseConfig.retryDelay,
      retryAttempts: databaseConfig.retryAttempts,
      autoLoadEntities: databaseConfig.autoLoadEntities,
      synchronize: databaseConfig.synchronize
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'src/public')
    }),
    UserModule,
    TodoistModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
