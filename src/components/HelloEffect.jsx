import { useEffect } from "react";

const HelloEffect = () => {
    useEffect(() => {
        console.log("Component Mounted");
    }, [])
}

export default HelloEffect;