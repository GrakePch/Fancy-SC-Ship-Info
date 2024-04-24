import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainInfo from "./MainInfo";
import LangContext from "./contexts/LangContext";

function App() {
  const [lang, setLang] = useState("en");

  const router = createBrowserRouter([
    {
      path: "/Fancy-SC-Ship-Info",
      element: <MainInfo />,
    },
  ]);

  return (
    <LangContext.Provider value={[lang, setLang]}>
      <RouterProvider router={router} />
    </LangContext.Provider>
  );
}

export default App;
