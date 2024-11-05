const requestURL = "https://dragonball-api.com/api/characters?limit=100";

async function fetchitemsJson() {
    try{
        const response = await fetch(requestURL);
        if (!response.ok){
            throw new Error(`Error en la peticion ${response.status}`);
        }
        return await response.json();
    }
    catch (error){
        console.error(`Error al obtener las items de la API:`,error);
        return null;
    }
}

