import { Product } from "@/types";

export const calculatePrice=(product:Product,quantity:number | undefined ) : string => {
    const total=calculatePriceProduct(product,quantity)
    return `${total} MAD` 
}


export const totalPriceProducts=(products:Product[]) : number => {
    return products.reduce((total, product) => total + calculatePriceProduct(product,product.quantityCart),0);;

}

const calculatePriceProduct=(product:Product,quantity:number | undefined ) : number  => {
    const totalSupplements =0;
    quantity= quantity !== undefined ? quantity : 0

    const total:number= (product.price * quantity ) + totalSupplements
    return total
}
