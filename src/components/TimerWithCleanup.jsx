import { useEffect, useState } from "react";

const TimerWithCleanup = () => {
    const [Time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((Time) => Time + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return(
        <>
            <h2>Task 4</h2>
            <p>{Time}</p>
        </>
    )
}

export default TimerWithCleanup;