/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate, CacheFirst } from "workbox-strategies";

declare const self: ServiceWorkerGlobalScope;

clientsClaim();
self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    ({ url }) => url.origin === "https://fakestoreapi.com" && url.pathname.startsWith("/products/categories"),
    new StaleWhileRevalidate({
        cacheName: "store-categories",
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxEntries: 1,
            }),
        ],
    }),
);

registerRoute(
    ({ url }) => url.origin === "https://fakestoreapi.com" && url.pathname.startsWith("/products"),
    new StaleWhileRevalidate({
        cacheName: "store-products",
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxEntries: 1,
            }),
        ],
    }),
);

registerRoute(
    ({ request }) => request.destination === "image",
    new CacheFirst({
        cacheName: "images",
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 30 * 24,
            }),
        ],
    }),
);

registerRoute(
    ({ request }) => request.destination === "script" || request.destination === "style",
    new StaleWhileRevalidate({
        cacheName: "static-resources",
    }),
);
