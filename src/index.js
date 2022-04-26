import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>
);
