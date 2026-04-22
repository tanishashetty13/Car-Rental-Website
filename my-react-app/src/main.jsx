import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import App from "./App";
import "./index.css"; // ensure this path is correct

createRoot(document.getElementById("root")).render(<App />);
