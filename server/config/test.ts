import dotenv from "dotenv";
dotenv.config();

export default {
    port: 3001,
    dbUri: `mongodb+srv://dwzm00:${process.env.PASSWORD}@cluster0.ii6blwz.mongodb.net/Dashboard?retryWrites=true&w=majority`,
};