export const DatabaseConfigProd = {
  type: 'mysql',
  host: 'mysql.sqlpub.com',
  port: 3306,
  username: 'ljt990218',
  password: 'tH7GdttGvkVtqOpD',
  database: 'sqlpub_learning',
  retryDelay: 3000,
  retryAttempts: 10,
  autoLoadEntities: true, // 同步，确保TypeORM实体每次运行应用时都会与数据库保持同步
  synchronize: false, // 有助于自动加载模块，而不是指定实体数组
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  logging: true
}
