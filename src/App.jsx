import { useState } from "react";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";

import MainInfo from "./MainInfo";
import QT from "./QT";
import Docker from "./components/Docker/Docker";
import LangContext from "./contexts/LangContext";

function App() {
  const [lang, setLang] = useState("en");

  const router = createHashRouter([
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
          path: "/QT",
          element: <QT />,
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
