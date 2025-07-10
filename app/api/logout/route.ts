import { NextResponse } from "next/server";

export async function GET() {
    const response = NextResponse.redirect(new URL("/login", process.env.NEXT_BASE_URL));

    response.cookies.set("admin-token", "", {
        maxAge: 0,
        path: "/",
    });

    return response;
}
