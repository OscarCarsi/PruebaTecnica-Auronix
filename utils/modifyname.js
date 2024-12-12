export const remplaceName = (results) => {
    return results.map((result, index) => {
        return{
            id: index + 1,
            name: result.name.replace(" ", "_"),
            status: result.status,
            gender: result.gender
        }
    });
}