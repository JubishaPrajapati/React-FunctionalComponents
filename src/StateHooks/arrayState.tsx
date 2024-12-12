import React, { useState } from "react";

const ArrayState: React.FC = () => {
    const [items, setItems] = useState<string[]>([]);

    const addItem = () => {
        setItems((previtem) => [...previtem, `Item ${previtem.length + 1}`]);    //previtem is a callback func for setitem
    }
    const removeItem = (itemToRemove: string) => {
        setItems((previtem) => previtem.filter((z) => z !== itemToRemove))
    }

    return (
        <div>
            <h3>Adding and removing array ele using array state</h3>
            <button onClick={addItem}>Add item</button>
            <ul>
                {items.map((x) => (
                    <li key={x}>
                        {x}
                        <button onClick={() => removeItem(x)}>Remove item</button>
                    </li>
                ))}
            </ul>
        </div >
    )
}
export default ArrayState;