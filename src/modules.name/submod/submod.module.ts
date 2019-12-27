/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { SubModController } from './submod.controller';
import { SubModService } from './submod.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SubModSchema } from './schema/submod.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Submod', schema: SubModSchema }])],
  controllers: [SubModController],
  providers: [SubModService],
})
export class SubModModule {}
