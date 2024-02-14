import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username:",
          type: "text",
          placeholder: "User-Name",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any) {
        // const { username, password } = credentials;
        // // const user = await User.find({ username });
        // // if (
        //   credentials?.username === user.username &&
        //   credentials?.password === user.password
        // ) {
        //   return user;
        // } else {
        return null;
        // }
      },
    }),
  ],
};
