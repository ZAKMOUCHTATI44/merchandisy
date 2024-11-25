export interface Product {
    id : number
    name : string
    picture : string
    price : number
    title : string
    quantityCart?:number
}


export type PriceTotal = {
    totalPriceProducts: number;
    shipping: number;
    totalPrice:number
  };
  

export type RootState = {
    cartItems: {
        products: Product[];
        openCart: boolean;
    };
}


export type Category={
    name:string
    id:string
    image:string
    countProducts?:number
    createdAt?:Date
}