import { useEffect, useState } from "react";


interface windowSizeInterface {
    height: number;
    width: number;
}

const useSideEffectCustom = () => {
    const [windowSize, setWindowSize] = useState<windowSizeInterface>({
        height: window.innerWidth,          //window: represents browsers window, .innerWidth returns width of viewport 
        width: window.innerWidth,
    });

    useEffect(() => {
        const handleSize = () => {            //func to update state by retriving updated dimension
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth,

            })
        }

        window.addEventListener('resize', handleSize);       //resize: browser builtin event ,  syntax: window.addEventListener(eventType, callbackFunction)
        return () => window.removeEventListener('resize', handleSize);   //removes event listener when comp unmounts
    }, [])   //to run only once

    return windowSize;    //to return curr window dimension from curr state 

}
export default useSideEffectCustom;