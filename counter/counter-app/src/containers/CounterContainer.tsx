import React, {useEffect, useRef, useState} from 'react';
import Counter from "../views/Counter";

interface parentCounterProps {
    parentCounter: number;
}

const CounterContainer = ({ parentCounter } : parentCounterProps ) => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef<number>(0);

    useEffect(() => {
        if (count == 0) {
            return;
        }

        const result = (prevCountRef.current < parentCounter) || (prevCountRef.current == 0);
        if(result) {
            if (((count & 1) === 0)) {
                increment();
            }
        }
        else {
            if (!((count & 1) === 0)) {
                decrement();
            }
        }

        prevCountRef.current = parentCounter;
    }, [parentCounter]);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <Counter
            count={count}
            increment={increment}
            decrement={decrement}
            reset={reset}
        />
    );
};

export default CounterContainer;