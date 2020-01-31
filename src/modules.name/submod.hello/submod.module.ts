/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { SubModController } from './submod.controller';
import { SubModService } from './submod.service';

@Module({
  controllers: [SubModController],
  providers: [SubModService],
})

export class SubModModule {}
