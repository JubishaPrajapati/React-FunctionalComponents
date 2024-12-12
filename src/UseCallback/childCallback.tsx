import React from "react";

interface ChildProps {
    product: string;
    addToCart: (product: string) => void;
}

const Child: React.FC<ChildProps> = React.memo(({ product, addToCart }) => {    //react memo prevents comp from rerendering unless props change
    console.log(`Rendered: ${product}`);
    return (
        <li>
            {product}{" "}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </li>
    );
});

export default Child;
