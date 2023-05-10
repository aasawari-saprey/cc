export interface User{
    enroll : string ,
    name : string,
    phone: string,
    password:string,
    
}
export interface product{
    name:string,
    price:number,
    category:string,
    
    image:string,
    description:string,
    id:number,
    quantity:undefined | number,
    productId:undefined|number
  }