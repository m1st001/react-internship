import CounterContainer from "./containers/CounterContainer.jsx";
import {GlobalStyle, Root} from "./views/Counter/styles.js";

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
