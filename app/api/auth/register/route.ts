import dbConnect from "@/utils/db";
import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  const { password, email, name } = await request.json();
  try {
    const user = await User.findOne({ email });
    if (user)
      return NextResponse.json(
        { message: "User exists with this email" },
        { status: 404 }
      );

    await User.create({ email, name, password });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
