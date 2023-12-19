import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CarSchema } from '../models/Car.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
// NOTE when setting up these contexts
// ⬇️ this is how you will reference the collection in your code
//                       ⬇️ this is how MongoDB names it in collections
  Cars = mongoose.model('car', CarSchema);
}

export const dbContext = new DbContext()
