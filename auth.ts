import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        return (
          profile?.email_verified === true &&
          profile?.email?.endsWith("@example.com") === true
        );
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
  providers: [
    GitHub,
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
