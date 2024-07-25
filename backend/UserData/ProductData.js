import mongoose from "mongoose";

const MyWorkImgSchema = new mongoose.Schema({
    image: { type: String, required: true },
});

const MyWorkImg = mongoose.model('MyWorkImg', MyWorkImgSchema);

const AddProduct = async (data) => {
    try {
        const userDoc = new MyWorkImg(data);
        let result = await userDoc.save();
        return result;
    } catch (error) {
        throw error;
    }
};

const GetProduct = async () => {
    try {
        let result = await MyWorkImg.find();
        return result;
    } catch (error) {
        throw error;
    }
};

const DeleteProduct = async (data) => {
    try {
        let result = await MyWorkImg.findByIdAndDelete(data.productId);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
};
export { AddProduct, GetProduct, DeleteProduct, };
