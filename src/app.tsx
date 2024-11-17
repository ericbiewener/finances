import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Nav from "./components/Nav.js";

export default function App() {
  return (
    <Router
      root={(properties) => (
        <>
          <Nav />
          <Suspense>{properties.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
