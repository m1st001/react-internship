import React from "react";
import { H1 } from "../Counter/styles";
import { Grid, ParentCard } from "./styles";
import CounterContainer from "../../containers/CounterContainer";
import { Box, Button, Container } from "../../styles/globalStyles";

interface ParentProps {
  counters: (typeof CounterContainer)[];
  addCounter: () => void;
  removeCounter: () => void;
  resetCounters: () => void;
}

const Parent = ({
  counters,
  addCounter,
  removeCounter,
  resetCounters,
}: ParentProps) => {
  return (
    <>
      <Container>
        <ParentCard>
          <H1>
            {counters.length} {counters.length == 1 ? "counter" : "counters"}
          </H1>
          <Box>
            <Button onClick={addCounter}>Add counter</Button>
            <Button onClick={removeCounter}>Remove first counter</Button>
            <Button onClick={resetCounters}>Reset</Button>
          </Box>
        </ParentCard>
      </Container>
      <Container>
        <Grid container>
          {counters.map((_, index) => (
            <Grid key={index}>
              <CounterContainer parentCounter={counters.length} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Parent;
