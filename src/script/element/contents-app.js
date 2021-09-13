import './game-card';

class ContentsApp extends HTMLElement {

  set gameData(game) {
    this._gameData = game;
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .content{
      display : flex;
      justify-content : space-around;
      flex-wrap : wrap;
      overflow:none;
      margin : 0px 20px;
    }
    </style>
    <main>
    <div class="content"></div>
    </main>
    `;
    const main = this.querySelector('main .content');
    for (let i = 0; i < 12; i++) {
      const gameCard = document.createElement('game-card');
      gameCard.gameData = this._gameData[i];
      main.appendChild(gameCard);
    }
  }
}

customElements.define('contents-app', ContentsApp);
