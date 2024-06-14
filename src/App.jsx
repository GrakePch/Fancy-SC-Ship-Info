import { useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import MainInfo from "./MainInfo";
import QT from "./QT";
import Docker from "./components/Docker/Docker";
import LangContext from "./contexts/LangContext";

function App() {
  const [lang, setLang] = useState("en");

  const router = createBrowserRouter([
    {
      path: "/Fancy-SC-Ship-Info",
      element: (
        <>
          <Docker />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/Fancy-SC-Ship-Info",
          element: <MainInfo />,
        },
        {
          path: "/Fancy-SC-Ship-Info/QT",
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
