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
    const jsonString = JSON.stringify(resultJson, null, 1);
    console.log(jsonString);
}

main();