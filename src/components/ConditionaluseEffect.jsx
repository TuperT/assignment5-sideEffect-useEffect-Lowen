import { useState, useEffect } from "react"

const ConditionaluseEffect = () => {
    const [toggle, setToggle] = useState("off");

    useEffect(() => {   
        if (toggle === "on") {
            console.log("Effect is running")
        }
    }, [toggle]);

    return(
        <>
            <h2>Task 5</h2>
            <p>{toggle}</p>
            <button onClick={() => setToggle(toggle === "off" ? "on" : "off")}>Toggle Message</button>
        </>
    )
}

export default ConditionaluseEffect