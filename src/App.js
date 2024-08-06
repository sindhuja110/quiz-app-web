import React from "react";
import Router from "./routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import mixpanel from "mixpanel-browser";

mixpanel.init("6f619919b5e49ee1f3402da905caaf52", {
  debug: true,
});

function App() {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Router />
    </div>
  );
}

export default App;
