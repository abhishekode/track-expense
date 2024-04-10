import mongoose, { Document, Schema, Model } from "mongoose";

// Define interface for user document
interface UserDocument extends Document {
    username: string;
    email: string;
    password: string;
    isVerified?: boolean;
    isAdmin?: boolean;
    forgotPasswordToken?: string;
    forgotPasswordTokenExpiry?: Date;
    verifyToken?: string;
    verifyTokenExpiry?: Date;
}

interface UserModel extends Model<UserDocument> {}

const userSchema = new Schema<UserDocument, UserModel>({
    username: {
        type: String,
        required: [true, "Please provide username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    password: {
       type: String,
       required: [true, "Please provide a password"],
    },
    isVerified: {
       type: Boolean,
       default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const User: UserModel = mongoose.models.users || mongoose.model<UserDocument, UserModel>("users", userSchema);

export default User;
