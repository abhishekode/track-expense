
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connect } from "@/config/connectDb";
import User from "@/models/user.model";


connect()
// Calls the connect function to establish a connection to the database.


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { username, email, password } = reqBody

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        // Saves the new user to the database.
        const savedUser = await newUser.save()


        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}