import { useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import MainInfo from "./MainInfo";
import QT from "./QT";
import Docker from "./components/Docker/Docker";
import IndexComponents from "./components/IndexComponents/IndexComponents";
import ShipSelector from "./components/ShipSelector/ShipSelector";
import LangContext from "./contexts/LangContext";
import EventsCountdown from "./pages/EventsCountdown/EventsCountdown";
import PersonalWeaponInfo from "./pages/PersonalWeaponInfo/PersonalWeaponInfo";
import PersonalWeaponSelector from "./pages/PersonalWeaponSelector/PersonalWeaponSelector";
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
          element: <ShipSelector />,
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
          path: "/PW",
          element: <PersonalWeaponSelector />,
        },
        {
          path: "/PW/:className",
          element: <PersonalWeaponInfo />,
        },
        {
          path: "/QT",
          element: <QT />,
        },
        {
          path: "/Prices/:manufacturer",
          element: <Prices />,
        },
        {
          path: "/Events",
          element: <EventsCountdown />,
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
