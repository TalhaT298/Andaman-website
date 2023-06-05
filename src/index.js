import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./context/useDataContext";
import { ShipDataProvider } from "./context/useShipDataContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import UseBusDataContext from "./context/UseBusDataContext";

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <UseBusDataContext>
      <DataProvider>
        <ShipDataProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ShipDataProvider>
      </DataProvider>
    </UseBusDataContext>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
