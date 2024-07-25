import mongoose from "mongoose";

const PiyuMakeoverUserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: {
        type: String, required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: 'Invalid contact number',
        },
    },
    service: { type: String, required: true },
    date: { type: String, required: true },
    bookingSlot: { type: String, required: true },
});

const userModel = mongoose.model('PiyuMakeoverUser', PiyuMakeoverUserSchema);

const BookingSlot = async (data) => {
    try {
        const newBooking = new userModel(data);
        const result = await newBooking.save();
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getBooking = async () => {
    try {
        const bookings = await userModel.find({});
        return bookings;
    } catch (error) {
        throw new Error(error.message);
    }
};



export { BookingSlot, getBooking };
