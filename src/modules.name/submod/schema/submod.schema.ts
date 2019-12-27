/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import * as mongoose from 'mongoose';

export const SubModSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
