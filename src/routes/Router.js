import { BrowserRouter,Routes, Route } from "react-router-dom";
import React from "react";
import IntroductionPage from "../components/layouts/IntroductionPage";
import LogIn from "../components/layouts/LogIn";
import Instructions from "../components/layouts/Instructions";

function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<IntroductionPage />}> </Route>
          <Route path="/logIn" element={<LogIn />}></Route>
          <Route path="/Instructions" element={<Instructions/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
