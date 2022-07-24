import React from "react";
import { useAppContext } from "./state/context";
import { MobileNavbar } from "./components";
import Home from "./pages/Home";

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
