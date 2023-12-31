import { getStoredCart } from "../utilities/fakeDb";

export const productsAndCartData = async() =>{
    const productData = await fetch('products.json');
    const products = await productData.json();
    const savedCart = getStoredCart();
    let cartArray = [];
    for(const id in savedCart){
        const foundProduct = products.find(product=>product.id === id);
        if(foundProduct){
            foundProduct.quantity = savedCart[id];
            cartArray.push(foundProduct)
        }
    }
    return {cartArray, products}
}