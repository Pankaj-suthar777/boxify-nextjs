import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";
type Provider = "google" | "github" | "credentials";
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar: string;
  provider: Provider;
  role: string;
  createdAt: Date;
  resetPasswordToken: string;
  resetPasswordExpire: Date;
  comparePassword(enteredPassword: string): Promise<boolean>;
  getResetPasswordToken(): string;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  avatar: {
    text: String,
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  provider: {
    type: String,
    default: "credentials",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// Encrypting password before saving the user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getResetPasswordToken = function (): string {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // hash token
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // set token expire time
  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

  return resetToken;
};

export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);
