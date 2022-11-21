import express from "express";
import ProductContainer from "../services/database/productContainer/index.js"
import chatContainer from "../services/database/chatContainer/index.js"

const router = express.Router();

const productService  = new ProductContainer();
const ChatContainer  = new chatContainer();


productService.init();
ChatContainer.init();

router.get('/getAll', async(_req, res) => {
    const result = await productService.getAll();
    return res.send(JSON.stringify(result));
})

router.post('/addProduct', async (req, res, next) => {
    let obj = req.body;
    const result = await productService.addProduct(obj);
    return res.send(JSON.stringify(result));
})


router.get('/getMessages', async(_req, res) => {
    const result = await ChatContainer.getAll();
    return res.send(JSON.stringify(result));
})

router.post('/addMessages', async (req, res, next) => {
    let obj = req.body;
    const result = await ChatContainer.addMessage(obj);
    return res.send(JSON.stringify(result));
})


export default router;
