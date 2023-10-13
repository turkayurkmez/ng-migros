export class Product{

    constructor(public id:number,
                public name:string,
                public price:number,
                public discountRate: number,
                public discountedPrice?: number  
                ){

    }
}


export const ProductCollection: Product[]=[
    new Product(1,"X",100,0.15),
    new Product(2,"Y",100,0.25),
    new Product(3,"Z",100,0.1),

]