/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { SubModModule } from './submod.mongo/submod.module';
import { SubModModule } from './submod.hello/submod.module';

@Module({
    imports: [
      // MongooseModule.forRoot('mongodb://localhost:27017/test'),
      SubModModule,
    ],
    controllers: [],
    providers: [],
  })

 export class ModModules {}
