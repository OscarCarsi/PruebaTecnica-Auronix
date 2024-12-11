const URL_ENDPOINT = "https://rickandmortyapi.com/api/character/";

export const getCaracteres = async () => {
    let allCharacters = [];
    let page = 1;
    let totalPages = 1;
    try{
        while(page <= totalPages){
            const response = await fetch(`${URL_ENDPOINT}?page=${page}`, {
                method: "GET",
            });
            const data = await response.json();
            allCharacters = allCharacters.concat(data.results);
            totalPages = data.info.pages;
            page++;
        }
        return allCharacters;
    }
    catch(error){
        console.error("Error to get characters", error);
    }
}