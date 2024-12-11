const URL_ENDPOINT = "https://rickandmortyapi.com/api/character/";
const getCaracteres = async () => {
    let allCharacters = [];
    let page = 1;
    let totalPages = 1;
    try{
        const response = await fetch(URL_ENDPOINT, {
            method: "GET",
        });
        const data = await response.json();
        console.log (data);
    }
    catch(error){
        console.error("Error to get characters", error);
    }
}
