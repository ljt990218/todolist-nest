// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(account: string, password: string): Promise<any> {
    const user = await this.userService.findByAccount(account)
    if (user && (await user.comparePassword(password))) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  async register(
    account: string,
    password: string,
    name: string,
    age: number,
    phone: string
  ) {
    // 检查用户是否已经存在
    // const existingUser = await this.userService.findByAccount(account)
    // if (existingUser) {
    //   throw new UnauthorizedException('User already exists')
    // }

    const user = await this.userService.create({
      account,
      password,
      name,
      age,
      phone
    })
    const payload = { email: user.account, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
