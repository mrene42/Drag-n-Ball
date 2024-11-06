const requestURL = "https://dragonball-api.com/api/characters?limit=100";

async function fetchCharacterJson() {
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

function createCharacterCard({name, ki, maxKi, race, gender, image, affiliation}){
    return`
    <div class="card-group">
        <div class= "card" id="allCards">
            <img src= "${image}" class="card-img-top" alt="allCards">
            <div class="Card-body" id="allCards"
                <h5 class="card-title" id="allCards">${name}</h5>
                <p class="card-text">${race} - ${gender}</p>
                <h6 class="card-text" id="allCards">Base KI: ${ki}</h6>
                <h6 class="card-text" id="allCards">Total KI: ${maxKi}</h6>
                <h6 class="card-text" id="allCards">Afilliation: ${affiliation}</h6>
            </div>
        </div>
    </div>
    `;
}

async function  displayItems() {
    const CharactersSection = document.getElementById("itemsSection")
    const itemsData = await fetchCharacterJson();

    if (itemsData && itemsData.items){
        const itemsCards = itemsData.items.map(createCharacterCard).join('');
        CharactersSection.innerHTML = itemsCards;
    }
    else{
        CharactersSection.innerHTML = `<p>No se ha podido cargar el JSON de los Characters</p>`;
    }
}

displayItems();