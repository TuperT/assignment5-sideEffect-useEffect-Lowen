import { useEffect, useState } from "react";

const ToggleMessage = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count Changed")
    }), [count];

    return(
        <>
            <h2>Task 2</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default ToggleMessage;