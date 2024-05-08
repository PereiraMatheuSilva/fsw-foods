import NextAuth from "next-auth/next";
import { authOptions } from "@/app/_lib/auth";

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };
