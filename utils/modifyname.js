export const remplaceName = (results) => {
    return results.map((result) => {
        return{
            id: result.id,
            name: result.name.replace(" ", "_"),
            status: result.status,
            gender: result.gender
        }
    });
}