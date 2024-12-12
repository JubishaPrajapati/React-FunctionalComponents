import { useState, useMemo } from "react";

const BasicMemo: React.FC = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const calcSum = useMemo(() => {
        return num1 + num2;
    }, [num1, num2]);

    return (
        <div>
            <h3>Using useMemo</h3>
            <div>
                <label>Enter number 1:</label>
                <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value) || 0)} />     {/*e is event obj as arg , etargetval: the val typed by user  and if input is empty or fails to convert it returns 0*/}
            </div>
            <div>
                <label>Enter number 2:</label>
                <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value) || 0)} />     {/*e is event obj as arg , etargetval: the val typed by user  and if input is empty or fails to convert it returns 0*/}
            </div>
            <h3>Calcilated Sum: {calcSum}</h3>
        </div>
    )
}
export default BasicMemo;