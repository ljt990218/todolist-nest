# TodoList Nest.js 后端项目

## 项目简介

这是一个使用 Nest.js 框架开发的 TodoList 后端项目。该项目提供了完整的待办事项管理功能，包括用户认证、任务 CRUD 操作等特性。

## 技术栈

- Nest.js - 渐进式 Node.js 框架
- TypeScript - 编程语言
- TypeORM - 数据库 ORM
- MySQL - 数据库
- JWT - 用户认证
- Passport - 身份验证中间件

## 环境要求

- Node.js (>= 16.x)
- MySQL (>= 8.0)
- pnpm (推荐) 或 npm

## 安装

```bash
# 安装依赖
$ pnpm install
```

## 配置

1. 复制 `.env.example` 文件为 `.env`
2. 根据您的环境配置数据库连接信息和其他环境变量

## 运行项目

```bash
# 开发环境
$ pnpm run start:dev

# 生产环境
$ pnpm run start:prod

# 构建项目
$ pnpm run build
```

## 测试

```bash
# 单元测试
$ pnpm run test

# e2e 测试
$ pnpm run test:e2e

# 测试覆盖率
$ pnpm run test:cov
```

## 项目结构

```
src/
├── config/         # 配置文件
├── modules/        # 功能模块
│   ├── auth/      # 认证模块
│   ├── users/     # 用户模块
│   └── todos/     # 待办事项模块
├── common/         # 公共代码
└── main.ts        # 应用入口文件
```