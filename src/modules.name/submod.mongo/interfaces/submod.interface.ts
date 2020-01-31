/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Document } from 'mongoose';

export interface SubMod extends Document {
  readonly name: string;
  readonly age: number;
}
