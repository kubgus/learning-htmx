const PORT = 3000;

function Error(options: { status: number }) {
    return new Response(`Error: ${options.status}`, { status: options.status });
}

Bun.serve({
    port: PORT,
    fetch(req) {
        const url = new URL(req.url);
        switch (url.pathname) {
            case "/":
                return new Response(Bun.file("./src/templates/index.html"), {
                    headers: {
                        "Content-Type": "text/html",
                    },
                });;
            case "/api":
                const query = url.searchParams.get("q");
                if (!query) return Error({ status: 400 });
                return new Response(Bun.file("./src/static/data/movies.json"), {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            default:
                return Error({ status: 404 });
        }
    },
});

console.log(`🚀 Server running on port ${PORT}`);