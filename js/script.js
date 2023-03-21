/**
 * [] Al click sul bottone:
 *      [] Prendo il valore del livello (bonus)
 *      [] In base al livello selezionato imposto il numero 
 *      delle celle (bonus)
 *      [X] Trovo il container nella griglia della pagina
 *      [X] Tolgo la scritta di benvenuto
 *      [X] Tolgo l'hidden dalla grid
 *      [] Genero la griglia con il ciclo for
 *      [] Per ognuno dei numeri (ciclo):
 *          [] Creare la cella
 *          [] Inserire il numero nella cella
 *          [] Aggiungere l'event listener alla cella
 *          [] Aggiungere la cella creata nel container della griglia
 * 
 * [] Al click su una cella:
 *      [] la cella cambia il colore
 *      [] stampare il numero della cella nella console
 */

document.getElementById("btn-play").addEventListener("click", startGame);

function startGame() {
    const grid = document.querySelector(".grid");
    const introText = document.querySelector("h2");
    introText.classList.add("hidden");
    grid.classList.remove("hidden");

    for (let i = 1; i <= cellsNumber; i++) {
        const newElem = createGridElem (i);
    }
}