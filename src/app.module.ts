import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { TodoistModule } from './todoist/todolist.module'
import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'
import { config } from 'dotenv'

config()

console.log('TEST')
console.log('JWT_SECRET:', process.env.JWT_SECRET)
console.log('TEST')

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
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      retryDelay: parseInt(process.env.DB_RETRYDELAY, 10),
      retryAttempts: parseInt(process.env.DB_RETRYATTEMPTS, 10),
      autoLoadEntities: process.env.DB_AUTOLOADENTITIES === 'true',
      synchronize: process.env.DB_SYNCHRONIZE === 'true'
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
