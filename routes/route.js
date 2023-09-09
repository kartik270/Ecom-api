import express from 'express'
import { userSignup } from '../controler/user-controler.js';
import { getProducts , getProductsByID } from '../controler/product-controller.js';
export const router = express.Router();
router.post('/Signup',userSignup);

router.get('/products',getProducts)

router.get(`/products/:id`, getProductsByID);

