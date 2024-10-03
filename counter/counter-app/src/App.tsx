import CounterContainer from "./containers/CounterContainer";
import {GlobalStyle, Root} from "./views/Counter/styles";

function App() {
  return (
      <>
          <GlobalStyle/>
          <Root>
              <CounterContainer/>
          </Root>
      </>
  )
}

export default App
