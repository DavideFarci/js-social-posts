/*
Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1 - Analizziamo la struttura dati fornita
Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
BONUS
1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
Consigli del giorno:
Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Buon lavoro!
*/

const elePostContainer = document.querySelector(".posts-list");

posts.forEach((element) => {
    elePostContainer.innerHTML += 
    `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src=${element.author.image} alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">${element.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.content}</div>
        <div class="post__image">
            <img src=${element.media} alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="javascript:void(0)" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`
});

//Milestone 3:
//Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
//Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

//seleziono il bottone di like per aggiungere un evento al click e l'icona che deve cambiare colore
//dentro la funzione 


const eleLikeButtons = document.querySelectorAll(".like-button");
const eleCounters = document.querySelectorAll(".js-likes-counter");
const postsHistory = [];

eleLikeButtons.forEach((eleLike, i) => {
    const eleCounter = eleCounters[i];

    eleLike.addEventListener("click", () => {
        if (eleLike.classList.contains("like-button--liked")) {
            posts[i].likes -= 1;
            postsHistory.pop(`${posts[i].id}`);
            console.log(postsHistory);
        } else {
            posts[i].likes += 1;
            postsHistory.push(`${posts[i].id}`);
            console.log(postsHistory);
        }

        eleLike.classList.toggle("like-button--liked");
        eleCounter.innerHTML = `${posts[i].likes}`;

    });
});




