import React from "react";
import { SdgContainer } from "../../pages/sdg";
import { ForecastContainer } from "../../pages/forecast";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTE_PATHS } from "../../defines/route.paths";

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_PATHS.HOMEPAGE} element={<SdgContainer />}></Route>
          <Route
            path={ROUTE_PATHS.FORECAST}
            element={<ForecastContainer />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
