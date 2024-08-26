import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema ({

    name: {
        type: String,
        required: [true, "Name is required"],
    },
    lastName: {
        type: String,
        required: [true, "lastName is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    address: {
        type: String,
        required: [true, "address is required"],
    },
});

export const ClientModel = mongoose.model("Client", clientSchema);
