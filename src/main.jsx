import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import App from "./components/App";
import "./index.css";
import "./tabs/module_3/BookFilter/books.css";
import { UserProvider } from "./userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
