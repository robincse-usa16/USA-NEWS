import React from "react";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/hero.css";
import "./styles/components.css";
import "./styles/responsive.css";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(<AppRoutes />);
