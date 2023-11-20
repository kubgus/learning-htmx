const PORT = 3000;

import { Page, Error } from "./app/page.ts";

Bun.serve({
    port: PORT,
    fetch(req) {
        switch (new URL(req.url).pathname) {
            case "/":
                return Page("./pages/index.html");
            default:
                return Error({ status: 404 });
        }
    },
});

console.log(`🚀 Server running on port ${PORT}`);