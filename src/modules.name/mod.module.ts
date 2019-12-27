/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { SubModModule } from './submod/submod.module';

@Module({
    imports: [SubModModule],
    controllers: [],
    providers: [],
  })

 export class ModModules {}
