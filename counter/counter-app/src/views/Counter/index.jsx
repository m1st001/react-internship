import React from 'react';
import {Box, Button, Container, H1} from "./styles.js";

const Counter = ({ count, increment, decrement, reset }) => {
    return (
        <Container>
            <H1>{count}</H1>
            <Box>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
                <Button onClick={reset}>Reset</Button>
            </Box>
        </Container>
    );
};

export default Counter;
