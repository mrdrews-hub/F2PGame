class GameList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        .card{
            width : 300px;
            height : 150px;
            background-color : var(--bar-color);
        }
        </style>
        <div class="card">
        <h4 class="a">YOUR GAME</h4>
        </div>
        `;
  }
}
customElements.define('game-list', GameList);
