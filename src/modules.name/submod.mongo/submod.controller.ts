/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Controller, Get } from '@nestjs/common';
import { SubModService } from './submod.service';
import { ReadSubModDTO } from './dto/read-submod.dto';

/**
 * Controller is used for http request and service called
 */
@Controller('submod')
export class SubModController {
  constructor(private readonly subModService: SubModService) {}

  /**
   * GET, POST, PUT, DELETE http methods start at this point
   */
  @Get()
  getSubMod(): ReadSubModDTO {
    return this.subModService.getSubMod();
  }
}
