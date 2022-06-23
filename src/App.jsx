import React from "react";
import { MobileNavbar } from "./components";

import Home from "./pages/Home";
import { useAppContext } from "./state/context";

function App() {
  const { isMobileMenuOpen } = useAppContext();
  return (
    <React.Fragment>
      <Home />
      {isMobileMenuOpen && <MobileNavbar />}
    </React.Fragment>
  );
}

export default App;
