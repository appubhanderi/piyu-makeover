import express from 'express';
import { AddProduct, DeleteProduct, GetProduct } from '../UserData/ProductData.js';

const MyWorkImg = express.Router();

MyWorkImg.post('/post', async (req, res) => {
    try {
        const data = await AddProduct(req.body);
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

MyWorkImg.get('/get', async (req, res) => {
    try {
        const data = await GetProduct();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

MyWorkImg.post('/delete', async (req, res) => {
    try {
        const data = await DeleteProduct(req.body);
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

export default MyWorkImg;
