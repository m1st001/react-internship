import { GlobalStyle, Root } from "./views/Counter/styles";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import AboutPage from "./routes/AboutPage";
import CountersPage from "./routes/CountersPage";
import RootPage from "./routes/RootPage";
import LoginPage from "./routes/LoginPages/LoginPage";
import ReduxLoginPage from "./routes/LoginPages/ReduxLoginPage";
import LoginSuccessPage from "./routes/LoginSuccessPage";

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
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "loginviaredux",
          element: <ReduxLoginPage />,
        },
        {
          path: "loginviaredux/success",
          element: <LoginSuccessPage />,
        },
        {
          path: "loginviaformik",
          element: <LoginSuccessPage />,
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
