import React from "react";
import { SdgContainer } from "../../pages/sdg";
//import { Provider } from "react-redux";
//import { setupStore } from "./store";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { ROUTE_PATHS } from "../defines/routePaths";

//const store = setupStore();

function App() {
  // return (
  //     <Provider store={store}>
  //         <BrowserRouter>
  //             <Routes>
  //                 <Route
  //                     path={ROUTE_PATHS.HOMEPAGE}
  //                     element={<TodoListContainer />}
  //                 ></Route>
  //             </Routes>
  //         </BrowserRouter>
  //     </Provider>
  // );
  return <SdgContainer />;
}

export default App;
