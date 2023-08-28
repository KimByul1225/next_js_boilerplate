import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRETS,
        }),
    ],
    secret: process.env.JWT_SECRET,
    adapter: MongoDBAdapter(connectDB), //세션 로그인용
};
export default NextAuth(authOptions); 





