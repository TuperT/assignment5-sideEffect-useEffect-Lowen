import { useState, useEffect } from "react";

const UpdateDcocumentTitle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return(
        <>
            <h2>Task 3</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default UpdateDcocumentTitle;