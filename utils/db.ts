import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  let DB_URL = "";

  if (process.env.NODE_ENV === "development") {
    DB_URL = process.env.DB_LOCAL_URL!;
  }
  if (process.env.NODE_ENV === "production") {
    DB_URL = process.env.DB_URL!;
  }

  console.log("process.env.DB_URL=>", DB_URL);

  await mongoose.connect(DB_URL).then(() => console.log("DB Connected"));
};

export default dbConnect;
