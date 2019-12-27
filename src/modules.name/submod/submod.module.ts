import { Module } from '@nestjs/common';
import { SubModController } from './submod.controller';
import { SubModService } from './submod.service';

@Module({
  imports: [],
  controllers: [SubModController],
  providers: [SubModService],
})
export class SubModModule {}
