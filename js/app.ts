import View from "./view.js"; 
import Store from "./store.js";
import { Player } from "./types";

const players: Player[] = [
  {
    id: 1,
    name: "Player 1",
    iconClass: "fa-x",
    colorClass: "turquoise",
  },
  {
    id: 2,
    name: "Player 2",
    iconClass: "fa-o",
    colorClass: "yellow",
  },
];

function init() {
  const view = new View();
  const store = new Store("live-t3-storage-key", players);

  //Current tab state changes
  store.addEventListener("statechange", ()=>{
    view.render(store.game, store.stats)
  });

  //Different tab state changes
  window.addEventListener("storage", () => {
    console.log("state changed in another tab");
    view.render(store.game, store.stats);
  });

  //The first load of the document
  view.render(store.game, store.stats);

  // console.log(store.game);

  view.bindResetGameEvent((event) => {
    store.reset();
    // view.render(store.game, store.stats)

  });

  view.bindNewRoundEvent((event) => {
    store.newRound();
    // view.render(store.game, store.stats)
  });

  view.bindPlayerMoveEvent((square) => {

    console.log(square);
    const existingMove = store.game.moves.find(
      (move) => move.squareId === +square.id
    );

    if (existingMove) {
      return;
    }
    
    //Advance to the next state by pushing a move to the moves array
    store.playerMove(+square.id);

    // view.render(store.game, store.stats);
  });

  // console.log(view.$.turn);
}

window.addEventListener("load", init);
