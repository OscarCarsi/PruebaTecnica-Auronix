import { getCaracteres } from "./services/rickandmorty-service.js";
import { filterAliveResults } from "./utils/filter.js";
import { remplaceName } from "./utils/modifyname.js";

const main = async () => {
    const characters = await getCaracteres();
    const charactersAlive = filterAliveResults(characters);
    const charactersWithNameModified = remplaceName(charactersAlive);
    const resultJson ={
        results: charactersWithNameModified
    }
    console.log(resultJson);
}

main();