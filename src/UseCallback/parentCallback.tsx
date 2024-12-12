import React, { useState, useCallback, Fragment } from "react";
import Child from "./childCallback";

const ParentCallback: React.FC = () => {
    const [cart, setCart] = useState<string[]>([]);

    const items = ['Laptop', 'Earphone', 'Computer', 'Smartphone']

    //function to handle adding product to cart
    const addTocart = useCallback((product: string) => {
        if (!cart.includes(product)) {
            setCart((prevCart) => [...prevCart, product]);
        }
    }, [cart]); //dependency 

    return (
        <div>
            <h3>Parent child usecallback</h3>
            <h3>Shooping cart</h3>
            <ul>
                {items.map((product) => (
                    <Fragment>
                        <Child
                            key={product}
                            product={product}
                            addToCart={addTocart}
                        />
                    </Fragment>

                ))}
            </ul>
            <h3>Cart</h3>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default ParentCallback;