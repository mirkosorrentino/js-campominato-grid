/**
 * [] Al click sul bottone:
 *      [] Prendo il valore del livello (bonus)
 *      [] In base al livello selezionato imposto il 
 *      numero delle celle (bonus)
 *      [X] Trovo il container nella griglia della 
 *      pagina
 *      [X] Tolgo la scritta di benvenuto
 *      [X] Tolgo l'hidden dalla grid
 *      [X] Genero la griglia con il ciclo for
 *      [X] Per ognuno dei numeri (ciclo):
 *          [X] Creare la cella
 *          [X] Inserire il numero nella cella
 *          [X] Aggiungere l'event listener alla cella
 *          [X] Aggiungere la cella creata nel 
 *          container della griglia
 * 
 * [X] Al click su una cella:
 *      [X] la cella cambia il colore
 *      [X] stampare il numero della cella nella console
 */

document.getElementById("btn-play").addEventListener("click", startGame);

function startGame() {
    const cellsNumber = getCellsNumber();
    
    
    const grid = document.querySelector(".grid");
    const introText = document.querySelector("h2");
    introText.classList.add("hidden");
    grid.classList.remove("hidden");
    grid.innerHTML = "";
    
    for (let i = 1; i <= cellsNumber; i++) {
        const newElem = createGrid(i, Math.sqrt(cellsNumber));
        newElem.addEventListener("click", handleCellClick);
        grid.append(newElem);
    }
}

// FUNCTIONS

/**
 * Description Funzione che genera un elemento della griglia
 * @param {string | number} content il testo che sarà inserito nella cella
 *  * @param {number} cellSize il numero di celle in una riga
 * @returns {object} DOM element
*/
function createGrid(content, cellSize) {
    const grid = document.createElement("div");
    grid.classList.add("grid-item");
    grid.style.width = `calc(100% / ${cellSize})`;
    grid.style.height = `calc(100% / ${cellSize})`
    grid.innerHTML = `<span>${content}</span>`;
    return grid;
}

/* Test
* const result = createGridElem(34);
* console.log(result)
*/

function handleCellClick () {
    this.classList.add("clicked")
    const clickedNumber = parseInt(this.querySelector("span").textContent);
    console.log(clickedNumber);
}

/**
 * Description In base al livello, resituisce il numero delle celle
 * @returns {number}
*/
function getCellsNumber() {
    const level = parseInt(document.querySelector("select").value);
    let cellsNumber;
    switch (level) {
        case 1:
            cellsNumber = 100;
            break;
    
        case 2:
            cellsNumber = 81;
            break;

        case 3:
            cellsNumber = 49;
            break;

        default:
            cellsNumber = 100;
    }

    return cellsNumber;
}