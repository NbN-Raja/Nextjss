import mongoose from "mongoose";

export async function connect() {
    try {
        const options = {
            
            serverSelectionTimeoutMS: 30000, // 30 seconds timeout for server selection
            socketTimeoutMS: 45000, // 45 seconds timeout for socket connections
        };

        await mongoose.connect(process.env.MONGO_URI!, options);

        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        });

        connection.on("error", (err) => {
            console.error("MongoDB connection error:", err);
            process.exit(1);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}
