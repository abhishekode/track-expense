import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { connect } from "@/config/connectDb";
import User from "@/models/user.model";

connect();


async function generateToken(user: { _id: string; username: string; email: string; }) {
    const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });
    return token;
}

async function handleLogin(request: NextRequest, user: { password: string; email: string, _id: string, username: string }) {
    const { password } = await request.json();

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
        return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    const token = await generateToken(user);

    const response = NextResponse.json({
        message: "Login successful",
        success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });

    return response;
}

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email } = reqBody;

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }

        return handleLogin(request, user);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        const response = NextResponse.json({
            message: "Logout successful",
            success: true,
        });
        response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });

        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
