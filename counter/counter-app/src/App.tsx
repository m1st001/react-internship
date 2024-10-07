import CounterContainer from "./containers/CounterContainer";
import {GlobalStyle, Root} from "./views/Counter/styles";
import ParentContainer from "./containers/ParentContainer";

function App() {
  return (
      <>
          <GlobalStyle/>
          <Root>
              <ParentContainer/>
          </Root>
      </>
  )
}

export default App
