/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Injectable } from '@nestjs/common';
import { ReadSubModDTO } from './dto/read-submod.dto';

/**
 * Service is used for business logic and query a data
 */
@Injectable()
export class SubModService {

  /**
   * Return a ReadSubModDTO object
   */
  getSubMod(): ReadSubModDTO {
    // Any business logic requires
    const readSubModDTO = new ReadSubModDTO();
    return readSubModDTO;
  }
}
