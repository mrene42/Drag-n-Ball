const requestURL = "https://dragonball-api.com/api/planets?limit=100";

async function fetchPlanetsJson() {
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

function createPlanetsCard({name, isDestroyed, image, deleteAt}){
    return`
    <div class="card-group">
        <div class= "card" id="allCards">
            <img src= "${image}" class="card-img-top" alt="allCards">
            <div class="Card-body" id="allCards"
                <h5 class="card-title" id="allCards">${name}</h5>
                <p class="card-text">${isDestroyed}</p>
                <h6 class="card-text" id="allCards">Base KI: ${deleteAt}</h6>
            </div>
        </div>
    </div>
    `;
}

async function  displayPlanets() {
    const planetsSection = document.getElementById("planetsSection")
    const planetsData = await fetchPlanetsJson();

    if (planetsData && planetsData.items){
        const planetsCards = planetsData.items.map(createPlanetsCard).join('');
        planetsSection.innerHTML = planetsCards;
    }
    else{
        planetsSection.innerHTML = `<p>No se ha podido cargar el JSON de los Planets</p>`;
    }
}

displayPlanets();