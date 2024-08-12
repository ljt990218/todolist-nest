export const DatabaseConfigDev = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'liu666666',
  database: 'learning',
  retryDelay: 3000,
  retryAttempts: 10,
  autoLoadEntities: true, // 同步，确保TypeORM实体每次运行应用时都会与数据库保持同步
  synchronize: true, // 有助于自动加载模块，而不是指定实体数组
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  logging: true
}
