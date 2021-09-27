import './game-card';

class ContentsApp extends HTMLElement {
  
  set gameData(game) {
    this._gameData = game;
    this.render();
  }

  set title(value){
    this._title = value;
  }
  render() {
    this.innerHTML = `
    <style>
    .content{
      display : flex;
      justify-content : space-evenly;
      flex-wrap : wrap;
      width : 90%;
      margin : auto;
    }
    .resultTitle{
      text-align : center;
      color : var(--text-color);
      margin-bottom : 15px;
    }
    .resultTitle span{
      color : gold;
    }
    @media(max-width : 768px){
      .content{
        display : flex;
        justify-content : center;
        flex-direction : row;
      }
    }
    </style>
    <h2 class="resultTitle">Result For <span>${(this._title == undefined ? "All" : this._title)}</span> Games</h2>
      <div class="content">
      </div>
    `;
    const main = this.querySelector('.content');
    for (let i = 0; i < 12; i++) {
      const gameCard = document.createElement('game-card');
      gameCard.gameData = this._gameData[i];
      main.appendChild(gameCard);
    }

  }

  renderError(message){
    this.innerHTML = "";
    this.innerHTML += `
    <style>
    .warning{
        font-weight: bold;
        color: gold;
        text-align : center;
    }
    </style>
    <h2 class="warning">${message}</h2>`
  }
}

customElements.define('contents-app', ContentsApp);
