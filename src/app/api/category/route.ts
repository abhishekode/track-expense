import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
const pump = promisify(pipeline);
import Category from "@/models/category.model";
import path from "path";


export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const files = formData.getAll('files') as File[];

        if (files.length === 0) {
            throw new Error("No files uploaded");
        }

        const file = files[0];
        const filePath = `./public/file/${file.name}`;
        
        await pump(file.stream(), fs.createWriteStream(filePath));

         // Create category object
         const { title, userId } = formData.get("category");
         const imgUrl = `/file/${file.name}`;
         const category = new Category({ title, imgUrl, userId, requested: false });
 
         // Save category in database
         await category.save();
        
        return NextResponse.json({ status: "success", data: file.size });
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e });
    }
}
export async function GET(request: NextRequest) {
    try {
        const categories = await Category.find();
        NextResponse.json(categories, { status: 200 });
        return NextResponse.json(categories, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
export async function PUT(req: NextRequest) {
    // Update a category
    try {
        const reqBody = await req.json();
        const { id, title, userId } = reqBody;
        const category = await Category.findById(id);
        if (!category) {
            return NextResponse.json({ error: "category not found" }, { status: 404 });
        }
        category.title = title;
        category.userId = userId;
        await category.save();
        return NextResponse.json(category, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });

    }
}
export async function DELETE(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { id } = reqBody;
        const category = await Category.findById(id);
        if (!category) {
            return NextResponse.json({ error: "category not found" }, { status: 404 });
        }
        // Delete the file from public/category folder
        if (category.imgUrl) {
            const filePath = path.join(process.cwd(), "public", category.imgUrl);
            fs.unlinkSync(filePath);
        }
        await Category.findByIdAndDelete(id);
        return NextResponse.json({ message: "Category deleted successfully" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
