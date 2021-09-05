import './game-list.js';

class ContentsApp extends HTMLElement {
  set gameData(game) {
    this._gameData = game;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .container{
      display : flex;
      justify-content : space-between;
    }
    </style>
    <h1>YOUR CONTENTS</h1>
        <div class="container">
            <game-list></game-list>
            <game-list></game-list>
            <game-list></game-list>
        </div>
        `;
  }
}

customElements.define('contents-app', ContentsApp);
