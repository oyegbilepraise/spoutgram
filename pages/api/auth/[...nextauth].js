// // pages/api/auth/[...nextauth].js

// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
// export default (req, res) => NextAuth(req, res, options);
// const options = {
//   providers: [
//     Providers.Credentials({
//       name: "Credentials",
//       credentials: {},
//       async authorize() {
//         const token = Cookies.get("token"); // implement this function to get the token from the cookie
//         console.log(token);
//         if (isTokenValid(token)) {
//           // implement this function to check if the token is valid
//           return { token };
//         } else {
//           throw new Error("Invalid token");
//         }
//       },
//     }),
//   ],
// };
