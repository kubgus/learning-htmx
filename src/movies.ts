export function JSONSearch(json: any, query: string) {
    const results = json.filter((movie: any) => {
        return movie.title.toLowerCase().includes(query.toLowerCase());
    });
    return results;
}

export function HTMLParse(json: any) {
    const template = Bun.build({
        entrypoints: ["./src/templates/movie.html"],
    })
}