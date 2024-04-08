export type ProductType = {

    id?:number,
    name:string,
    image:string,
    desc:string,
    price?:number | string,
    quantity:number
    category:{
        name:string,
        icon:string
    }

}