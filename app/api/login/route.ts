import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    if(email === "admin@oneclickdrive.com" && password === "123456789") {
        const res = NextResponse.json({message: 'logged-in'})
        res.cookies.set('admin-token', 'valid-token', {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60,
            path: '/'
        });
        return res;
    }
    return NextResponse.json({message: 'Invalid credentials'}, {status: 401})
}