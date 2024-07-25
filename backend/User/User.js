import express from 'express';
import { BookingSlot, getBooking, } from '../UserData/UserData.js';

const PiyuMakeoverUser = express.Router();

PiyuMakeoverUser.post('/book', async (req, res) => {
    try {
        let data = await BookingSlot(req.body);
        console.log(req.body)
        console.log(data)
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});



PiyuMakeoverUser.get('/getBooking', async (req, res) => {
    try {
        const bookings = await getBooking();
        res.send(bookings);
    } catch (error) {
        res.status(500).send(error.message);
    }
});



export default PiyuMakeoverUser;
