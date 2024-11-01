import React from "react";
import { H1 } from "./styles";
import { Box, Button, Card, Container } from "../../styles/globalStyles";

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const Counter = ({ count, increment, decrement, reset }: CounterProps) => {
  return (
    <Container>
      <Card>
        <H1>{count}</H1>
        <Box>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
          <Button onClick={reset}>Reset</Button>
        </Box>
      </Card>
    </Container>
  );
};

export default Counter;
