import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import User, { IUser } from "@/model/user";
import dbConnect from "@/utils/db";

type Credentials = {
  email: string;
  password: string;
};

type Token = {
  user: IUser;
};

async function auth(req: NextRequest, res: any): Promise<NextResponse> {
  return await NextAuth(req, res, {
    session: {
      strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
        // @ts-expect-error type
        async authorize(credentials: Credentials) {
          dbConnect();

          const { email, password } = credentials;
          const user = await User.findOne({ email }).select("+password");

          if (!user) {
            throw new Error("Invalid email or password");
          }

          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );

          if (!isPasswordMatched) {
            throw new Error("Invalid email or password");
          }

          return user;
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.user = user;
        }
        const jwtToken = token as Token;
        if (req.url?.includes("/api/auth/session?update")) {
          const updatedUser = await User.findById(jwtToken?.user?._id);
          token.user = updatedUser;
        }
        return token;
      },
      async session({ session, token }) {
        session.user = token.user as IUser;
        //@ts-expect-error type
        delete session?.user?.password;
        return session;
      },
      async signIn({ account, profile }) {
        await dbConnect();

        if (account) {
          // Check if the user already exists
          if (!profile) return false;
          const existingUser = await User.findOne({ email: profile.email });

          if (!existingUser) {
            const newUser = new User({
              name: profile.name,
              email: profile.email,
              image: profile?.image || "",
              provider: account.provider,
            });
            await newUser.save();
            return true;
          }
        }
        return true;
      },
      async redirect() {
        return "/home/dashboard";
      },
    },
    pages: {
      signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
  });
}

export { auth as GET, auth as POST };
