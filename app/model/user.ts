// models/User.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  message: string;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    firstName: { type: String  },
    lastName: { type: String  },
    email: { type: String },
    companyName: { type: String },
    message: { type: String},
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
