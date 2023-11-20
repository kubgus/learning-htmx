export function Page(path: string) {
    return new Response(Bun.file(path), {
        headers: {
            "Content-Type": "text/html",
        },
    });
}

export function Error(options: { status: number }) {
    return new Response(`Error: ${options.status}`, { status: options.status });
}