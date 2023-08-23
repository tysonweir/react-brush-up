import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CommentContextProvider } from "./store/comment-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CommentContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CommentContextProvider>
);
