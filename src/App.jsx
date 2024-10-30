import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import AboutUs from "./components/Aboutus";
import SupportUs from "./components/SupportUs";
function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <AboutUs />
      <SupportUs />
    </div>
  );
}

export default App;
