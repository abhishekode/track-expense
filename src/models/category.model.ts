import mongoose, { Document, Schema, Model } from "mongoose";

// Define interface for category document
interface CategoryDocument extends Document {
    title: string;
    imgUrl: string;
    userId: string;
    requested: boolean;
}

// Define interface for category model
interface CategoryModel extends Model<CategoryDocument> {}

const categorySchema = new Schema<CategoryDocument, CategoryModel>({
    title: {
        type: String,
        required: [true, "Please provide title"],
    },
    imgUrl: {
        type: String,
        required: [true, "Please provide image URL"],
    },
    userId: {
       type: String,
       required: [true, "Please provide user ID"],
    },
    requested: {
       type: Boolean,
       default: false,
    },
});

const Category: CategoryModel = mongoose.models.categories || mongoose.model<CategoryDocument, CategoryModel>("categories", categorySchema);

export default Category;
