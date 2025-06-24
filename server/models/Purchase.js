import mongoose, { mongo } from "mongoose";

const PurchaseSchema = new mongoose.Schema({
    courseId: {type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        require:  true
    },
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    amount: { type: Number, required: true},
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending'}
},{timestamps:true});

export const Purchase = mongoose.model('Purchase', PurchaseSchema)