import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'
import { RegisterDto } from './dto/register.dto'

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalStrategy)
  @Post('login')
  async login(@Body() body) {
    return this.authService.login(body)
  }

  @Post('register')
  async register(@Body() body: RegisterDto) {
    const { account, password } = body
    return this.authService.register(account, password)
  }
}
