document.documentElement.classList.add('js-enabled');

//1. Cibler toutes les touches (ça va donner un tableau)DONE
//ajout B Cibler Tous les audios
//ajout A : parcourir toutes le tableau des couches DONE
//2. ajouter un événement au keydown DONE // correction ajpouter un evenement au document
//3. faire un test
//3.0 condition = si le dataset.key représente une key // correction1 si le dataset.key === audio.datakey // correction  si le dataset.key represente le keycode
//3.1 dans le test, faire jouer l'audio qui a le dataset.key qui le représente
//3.2 ajouter un écouteur d'événement sur le son de type transionenend // parcourir tous les sons
//correction suite faire un test pour voir quelle son à le keycode qu'on cherche
//correction fin si ça correcpond faire jouer le son
//3.3 si l'evenement n'est pas fini
//4.on peut raappuyer sur le bouton ne relance pas le son (voir avec currentTime)
//5. ajouter une classe a body qui correspond au dataset.key qu'on a ajouté
//6. ajouter un evenement à la window
//7. au click detecter sur la cible du du clique
//8.si la cible à un dataset.key on joue l'audio qui posséde ce data.key
//et rebolote

const drumkit = {
  constInit () {
    this.keys = document.querySelectorAll('.key');
    this.audios = document.getElementsByTagName('audio');
  },

  AppInit(){
    this.constInit()
    for (const key of this.keys) {
      document.addEventListener('keyup', (e) => {
        document.body.classList.add(e.key);
        document.addEventListener('transitionend', () => {
          document.body.classList.remove(e.key);
        });

        if (key.dataset.key === e.key) {
          for (const audio of this.audios) {
            if (audio.dataset.key === e.key) {
              if (audio.currentTime !== null) {
                audio.play();
              }
            }
          }
        }
      });
    }
  }
};

drumkit.AppInit()




