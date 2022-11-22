import { Workbox } from "workbox-window";

export function registerServiceWorker() {
    if (!IS_PRODUCTION || !("serviceWorker" in navigator)) {
        return;
    }

    const wb = new Workbox("service-worker.js");
    wb.addEventListener("installed", (e) => {
        if (e.isUpdate) {
            window.location.reload();
        }
    });
    wb.register();
}
