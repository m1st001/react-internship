import { GlobalStyle, Root } from "./views/Counter/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import AboutPage from "./routes/AboutPage";
import CountersPage from "./routes/CountersPage";
import RootPage from "./routes/RootPage";

function App() {
  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <RootPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "counters",
          element: <CountersPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <GlobalStyle />
      <Root>
        <RouterProvider router={router} />
      </Root>
    </>
  );
}

export default App;
