import { GlobalStyle, Root } from "./views/Counter/styles";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import AboutPage from "./routes/AboutPage";
import CountersPage from "./routes/CountersPage";
import RootPage from "./routes/RootPage";

function App() {
  const router = createHashRouter([
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
      <RouterProvider router={router} />
      <Root></Root>
    </>
  );
}

export default App;
