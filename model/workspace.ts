// import mongoose, { Document, Schema } from "mongoose";
// import { IUser } from "./user";

// export interface IWorkspaces extends Document {
//   title: string;
//   image: string;
//   user: IUser;
// }

// const workspacesSchema: Schema<IWorkspaces> = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, "Please enter title"],
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "User",
//   },
//   image: {
//     type: String,
//     required: [true, "Please enter image"],
//   },
// });

// export default mongoose.models.User ||
//   mongoose.model<IUser>("Workspaces", workspacesSchema);
