import { useRef, useEffect } from "react";

const CombineuseRefEffect: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div>
            <h3>Input focus by combining useRef with useEffect</h3>
            <input type="text" ref={inputRef} placeholder="Type something" />    {/* first mai focus garaidincha */}
        </div>

    )
}
export default CombineuseRefEffect;