/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ReadSubModDTO } from './dto/read-submod.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SubMod } from './interfaces/submod.interface';
import { CreateSubModDTO } from './dto/create-submod.dto';

/**
 * Service is used for business logic and query a data
 */
@Injectable()
export class SubModService {
  constructor(@InjectModel('Submod') private readonly subModModel: Model<SubMod>) {}

  /**
   * Return a ReadSubModDTO object
   */
  getSubMod(): ReadSubModDTO {
    // Any business logic requires
    const readSubModDTO = new ReadSubModDTO();
    return readSubModDTO;
  }

  /**
   * Example of saving db
   */
  async create(createSubModDto: CreateSubModDTO): Promise<SubMod> {
    const createdSubMod = new this.subModModel(createSubModDto);
    return await createdSubMod.save();
  }

  async findAll(): Promise<SubMod[]> {
    return await this.subModModel.find().exec();
  }
}
