import { useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import MainInfo from "./MainInfo";
import QT from "./QT";
import Docker from "./components/Docker/Docker";
import IndexComponents from "./components/IndexComponents/IndexComponents";
import LangContext from "./contexts/LangContext";
import Prices from "./pages/Prices/Prices";

function App() {
  const [lang, setLang] = useState("en");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Docker />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainInfo />,
        },
        {
          path: "/:shipId",
          element: <MainInfo />,
        },
        {
          path: "/c",
          element: <IndexComponents />,
        },
        {
          path: "/QT",
          element: <QT />,
        },
        {
          path: "/Prices/:manufacturer",
          element: <Prices />,
        },
      ],
    },
  ]);

  return (
    <LangContext.Provider value={[lang, setLang]}>
      <RouterProvider router={router} />
    </LangContext.Provider>
  );
}

export default App;
