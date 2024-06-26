import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { options } from "./options";

const handler: NextAuthOptions = NextAuth(options);

export { handler as GET, handler as POST };
