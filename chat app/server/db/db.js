import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URI)

            console.log(`Connected succesfully.`)
        
    } catch (error) {
        console.log(`error message:${error.message}`)
        process.exit(1)
    }
}
export default connectToMongoDB;