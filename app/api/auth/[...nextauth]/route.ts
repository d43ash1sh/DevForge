import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { NextRequest } from "next/server";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  pages: {
    signIn: "/",
  },
};

function handler(
  req: NextRequest,
  context: { params: { nextauth: string[] } }
) {
  return NextAuth(authOptions)(req, context);
}

export { handler as GET, handler as POST };