const filterAliveResults = (results) => {
    return results.filter((result) => {
        return result.status.toLowerCase() === "alive";
    });
}