/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { SubModController } from './submod.controller';
import { SubModService } from './submod.service';
import { HelloLoggerMiddleware } from './middleware/submod.middleware.hello';

@Module({
  controllers: [SubModController],
  providers: [SubModService],
})

export class SubModModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HelloLoggerMiddleware)
      .forRoutes('submod.hello');
  }
}
