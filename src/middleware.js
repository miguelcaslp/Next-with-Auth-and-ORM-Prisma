// Run on edge
// https://blog.stackademic.com/authentication-and-authorization-on-the-edge-with-auth-js-nextauth-5-and-mongodb-5903d7e95f99
import NextAuth from "next-auth";
import authConfig from "@/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    // console.log(req.auth);
    // console.log(req.nextUrl);
    if (!req.auth) {
        console.log('no autenticado');

        let callbackUrl = req.nextUrl.pathname;
        if (req.nextUrl.search) {
          callbackUrl += req.nextUrl.search;
        }
    
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);
        return Response.redirect(req.nextUrl.origin
            + `/auth/login?callbackUrl=${encodedCallbackUrl}`)
    }
    else {
        console.log('autenticado');
    }
})


export const config = {
    matcher: [
        "/dashboard(.*)",
        "/admin(.*)",
        "/articulos",
        "/articulos/new",
        "/articulos/edit",
        "/articulos/delete",
    ],
};