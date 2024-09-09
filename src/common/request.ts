import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Inject
} from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { tap } from 'rxjs/operators'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class RequestInterceptor implements NestInterceptor {
  constructor(@Inject(JwtService) private readonly jwtService: JwtService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest()
    const response = context.switchToHttp().getResponse()
    const token = request.headers['token']
    const url = request.url

    // 检查请求路径是否为 /api/auth
    if (url.startsWith('/api/auth')) {
      return next.handle()
    }

    if (!token) {
      response.status(401).json({
        code: 401,
        message: 'Token is missing'
      })
      return throwError(() => new Error('Token is missing'))
    }

    try {
      const decoded = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET
      })
      request.user = decoded
    } catch (error) {
      response.status(401).json({
        code: 401,
        message: 'Invalid token'
      })
      return throwError(() => new Error('Invalid token'))
    }

    return next.handle().pipe(
      tap(() => {
        // 如果需要，可以在这里添加请求成功后的逻辑
      })
    )
  }
}
