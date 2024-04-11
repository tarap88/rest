import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RatsSchema } from '../models/Rat.js';
import { LocationsSchema } from '../models/Location.js';
import { MissionSchema } from '../models/Mission.js';


class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Rat = mongoose.model('Rat', RatsSchema)
  Location = mongoose.model('Location', LocationsSchema)
  Missions = mongoose.model('Missions', MissionSchema)
}

export const dbContext = new DbContext()
