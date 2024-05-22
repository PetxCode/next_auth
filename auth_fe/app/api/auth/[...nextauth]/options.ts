import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
          name: "name",
        },
        email: {
          label: "Email",
          type: "email",
          name: "email",
          placeholder: "jsmith@test.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
          name: "password",
        },
      },
      async authorize(credentials, req) {
        const url: string = "http://localhost:4455/api";
        const res = await fetch(`${url}/check-account/`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        console.log(user);
        if (res.status === 200) {
          const res = await fetch(`${url}/sign-in-account/`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const user = await res.json();

          if (res.ok && user) {
            return { name: user?.data?.name, email: user?.data?.email };
          } else {
            return null;
          }
        } else {
          const res = await fetch(`${url}/create-account/`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const user = await res.json();

          if (res.ok && user) {
            return {
              name: user?.data?.name,
              email: user?.data?.email,
              password: user?.data?.password,
            };
          } else {
            return null;
          }
        }
      },
    }),

    GithubProvider({
      clientId: process.env.NEXT_GITHUB_ID as string,
      clientSecret: process.env.NEXT_GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_ID as string,
      clientSecret: process.env.NEXT_GOOGLE_SECRET as string,
    }),
  ],

  secret: "thesecret",
};
