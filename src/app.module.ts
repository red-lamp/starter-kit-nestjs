/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { ModModules } from './modules.name/mod.module';

@Module({
    imports: [ModModules],
    controllers: [],
    providers: [],
  })

 export class AppModules {}
