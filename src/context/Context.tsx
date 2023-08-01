import { createContext,useState } from "react";
import { ProductCard } from "../components/ProductCard";

 export interface Icard {
  name: string,
  price:number,
  count: number,
  id: number,
  total: number
}

interface CartContextValue {
  cart: ProductCard[],
  setCart: (data: ProductCard[]) => void
 }

 const cartInitial: CartContextValue = {
   cart:[
    {
      name:'',
      price: 2,
     count: 0,
     id: 0, 
     total:0
    }],
   setCart: (_data: ProductCard[]) => {}
 }

export const appContext = createContext<CartContextValue>(cartInitial);

export default function ContextProvider({children}:any) {
    const [cart, setCart] = useState<Icard[]>([]);
  return (
    <appContext.Provider value = {{cart, setCart}}>
        {children}
    </appContext.Provider>
  )
}
