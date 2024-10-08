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

  // 411: 已注册 412: 未注册 413: 密码错误

  async login(user: any) {
    const userInfo = await this.userService.findByAccount(user.account)

    if (!userInfo) {
      return { code: 412, data: {}, message: 'The user does not exist' }
    }
    const isMatch = await userInfo.comparePassword(user.password)
    if (!isMatch) {
      return { code: 413, data: {}, message: 'Password error' }
    }

    const { password, ...userWithoutPassword } = userInfo
    const payload = { account: userInfo.account, user_id: userInfo.id }

    const access_token = await this.jwtService.signAsync(payload)
    return {
      access_token,
      user_info: userWithoutPassword
    }
  }

  async register(account: string, user_password: string) {
    const existingUser = await this.userService.findByAccount(account)
    if (existingUser) {
      return { code: 411, data: {}, message: 'User already exists' }
    }

    const user = await this.userService.create({
      account,
      password: user_password
    })

    const { password, ...userWithoutPassword } = user
    const payload = { account: user.account, user_id: user.id }
    const access_token = await this.jwtService.signAsync(payload)

    return {
      access_token,
      user_info: userWithoutPassword
    }
  }

  async logout() {
    return { message: 'Logged out successfully' }
  }

  async decodeToken(token: string): Promise<any> {
    try {
      const decoded = await this.jwtService.verifyAsync(token)
      return decoded
    } catch (error) {
      throw new UnauthorizedException('Invalid token')
    }
  }
}
