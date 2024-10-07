import React from "react";
import {Box, Button, Container, H1} from "../Counter/styles";
import {Grid, ParentCard} from "./styles";
import CounterContainer from "../../containers/CounterContainer";

interface ParentProps {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const Parent = ({ count , increment, decrement, reset } : ParentProps) => {
    return (
        <>
        <Container>
            <ParentCard>
                <H1>{count} {count == 1 ? "counter" : "counters"}</H1>
                <Box>
                    <Button onClick={increment}>Add counter</Button>
                    <Button onClick={decrement}>Remove first counter</Button>
                    <Button onClick={reset}>Reset</Button>
                </Box>
            </ParentCard>
        </Container>
            <Container>
                <Grid container>
                    {[...Array(count)].map(( ) => (
                        <Grid>
                            <CounterContainer/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};


export default Parent;