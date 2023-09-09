import Product from "./model/product-schema.js";
import { products } from "./constant/data.js";
export const Defaultdata  =async ()=>{
    try{
       
        await Product.insertMany(products);
        console.log('data successfully imported')

    }catch(error)
    {
        console.log('error while inserting data',error.message)
    }
}