import { useContext, useState } from "react";
import { appContext } from "../context/Context";

export interface ProductCard{
    color ?: string,
    image ?: string,
    name: string,
    details ?: string,
    other ?: string,
    price: number,
    id:number,
    count: number,
    total:number
    index ?:number
    
}


export default function ProductCard() {

    const {cart, setCart} = useContext(appContext)

    const [listItem] = useState<ProductCard[]>([
        {
            color: 'red',
            image: '/strawberryJuiceBottle.png',
            name: 'Strawberry juice',
            details: 'fresh strawberry mixed',
            other: 'with passion',
            price: 2,
            id: 1,
            count: 1,
            total:0
        },
        {
            color: 'orange',
            image: '/orangeJuiceBottle.png',
            name: 'Orange juice',
            details: 'fresh orange mixed',
            other: 'with carrot',
            price: 2,
            id: 2,
            count: 1,
            total: 0
        },
        {
            color: 'green',
            image: '/greenJuiceBottle.png',
            name: 'Kiwi juice',
            details: 'fresh kiwi mixed',
            other: 'with lemon',
            price: 2,
            id: 3,
            count: 1,
            total:0
        }
    ])

    const handleAdded = (item :ProductCard)=>{
        // copie du state
        const cartCopy = [...cart];

        // manipulation copie 
        const currentItem = cartCopy.find(current => current.id === item.id);


        if(!currentItem){
            item.count = 1
            cartCopy.push(item)
            setCart(cartCopy);
        } else{
            currentItem.count = currentItem.count + 1
            setCart(cartCopy)

        }
     }

  return (
    <>
        {listItem.map((item)=>{
            return(
                <div className="productCard" id={item.color} key={item.id}>
                    <div className="imageCard">
                        <img src={item.image} alt="bottle of juice" />
                    </div>

                    <div className="footerCard">
                     <div className="topCard">
                    <h2>{item.name}</h2>
                    <h2>{item.price}$</h2>
                </div>

                <p>{item.details}<br/>{item.other}</p>

                <div className="bottomCard">
                    <span className="material-symbols-sharp" id="favorite">favorite</span>
                    <button onClick={()=>{handleAdded(item)}}>Buy now</button>
                </div>

                </div>

    </div>
            )
        })}
    </>
    
  )
}
