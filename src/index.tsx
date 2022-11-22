import React from "react";
import ReactDOM from "react-dom/client";

import { StoreAndServicesProvider } from "./context/storeAndServicesContext";
import { Layout } from "./layout";
import { registerServiceWorker } from "./utils/serviceWorkerRegistration";

import "./theme/theme.pcss";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
    <React.StrictMode>
        <StoreAndServicesProvider>
            <Layout />
        </StoreAndServicesProvider>
    </React.StrictMode>,
);

registerServiceWorker();
