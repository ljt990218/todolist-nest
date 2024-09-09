import { Injectable, NestInterceptor, CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          code: data.code || 200,
          data: data.data || {},
          message: data.message || 'success'
        }
      })
    )
  }
}
