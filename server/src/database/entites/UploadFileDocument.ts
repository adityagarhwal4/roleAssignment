import { Document, Schema } from "mongoose";


export interface UploadFileDocument extends Document {
    fileUrl: string;
    uploadedBy: Schema.Types.ObjectId;
};