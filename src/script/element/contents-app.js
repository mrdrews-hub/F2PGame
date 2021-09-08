import './game-card.js';

class ContentsApp extends HTMLElement {

  set gameData(game) {
    this._gameData = game;
    this.render();
  }

  connectedCallback(){
    console.log(this._gameData);
  }

  render() {
    this.innerHTML = ``;
    // this._gameData.forEach(game => {
    //   const gameItem = document.createElement("game-card");
    //   gameItem.gameData = game;

    //   this.appendChild(gameItem);
    // })
    for(let i = 0 ; i < 12; i++){
      const gameCard = document.createElement("game-card");
      gameCard.gameData = this._gameData[i];
      this.appendChild(gameCard);
    }
  }
}

customElements.define('contents-app', ContentsApp);