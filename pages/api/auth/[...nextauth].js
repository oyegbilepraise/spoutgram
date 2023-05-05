import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: '383465085470-da5onghod132lrlver51tduhl77sv2s8.apps.googleusercontent.com',
            clientSecret: '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',
        }),
        // ...add more providers here
    ],
})