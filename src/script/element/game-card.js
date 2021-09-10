class GameCard extends HTMLElement {
  constructor(){
    super();
    this._shadow = this.attachShadow({mode:"open"});
  }
  set gameData(game){
    this._gameData = game;
    this.render();
  }

  render() {
    this._shadow.innerHTML = `
        <style>
        :host{
          width : min-content;
          height : auto;
        }
        .card{
          display : grid;
          grid-template-column : 1fr;
          grid-template-rows : 1fr .7fr 60px ;
          grid-template-areas : "image" "text" "details" ;

          border-radius : 18px;
          background : var(--bg-color);
          box-shadow : 5px 5px 10px rgba(0,0,0,.9);
          box-sizing : border-box;
          transition: .3s ease;
          margin : 15px 10px;
        }
        .card:hover {
          transform : scale(103%);
        }
        .card-image {
          grid-area: image;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          background-size: cover;
        }
        .card-text {
          grid-area: text;
          margin : 0px 15px;
          color : var(--text-color);
        }
        .title{
          text-align : center;
          font-size:28px;
        }
        .card-text p {
          text-align : justify;
        }
        .details {
          grid-area : details;
          display : flex;
          justify-content : space-between;
          margin : 15px;
          color : gray;
          font-weight : bold;
        }
        </style>
        <div class="card">

          <div class="card-image">
            <img src="${this._gameData.thumbnail}" alt="thumbnail"/>
          </div>

          <div class="card-text">
            <h2 class = "title">${this._gameData.title}</h2>
            <p>${this._gameData.short_description}</p>
          </div>

          <div class="details">
            <div class="platform">${this._gameData.platform}</div>
            <div class="Genre">${this._gameData.genre}</div>
          </div>

        </div>
        `;
  }
}
customElements.define('game-card', GameCard);
