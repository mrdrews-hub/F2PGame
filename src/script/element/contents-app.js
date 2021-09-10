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
    this.innerHTML = `
    <style>
    main{
      display : flex;
      justify-content : space-around;
      flex-wrap : wrap;
      overflow:none;
      margin : 25px 20px;
    }
    </style>
    <main>
    </main>
    `;
    // this._gameData.forEach(game => {
    //   const gameItem = document.createElement("game-card");
    //   gameItem.gameData = game;

    //   this.appendChild(gameItem);
    // })
    const main = this.querySelector('main');
    for(let i = 0 ; i < 12; i++){
      const gameCard = document.createElement("game-card");
      gameCard.gameData = this._gameData[i];
      main.appendChild(gameCard);
    }
  }
}

customElements.define('contents-app', ContentsApp);