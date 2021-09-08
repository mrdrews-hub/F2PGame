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
        }
        .card{
           display : grid;
           grid-template-column : 250px;
           grid-template-rows : 1fr 1fr auto;
           grid-template-areas : "image" "text" "stats";

           border-radius : 18px;
           background : var(--bg-color);
           box-shadow : 5px 5px 10px rgba(0,0,0,.9);

           transition: .3s ease;
           
          margin : 25px;
        }
        .title{
          text-align : center;
          font-size:28px;
        }
        .card-text {
          grid-area: text;
          margin : 0px 15px;
          color : var(--text-color);
        }
        .card-text p {
          text-align : justify;
        }
        .card-image {
          grid-area: image;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          background-size: cover;
        }
        .card-image img {
          width : 300px;
        }
        .card-stats {
          grid-area: stats; 
          display: grid;
          grid-template-columns: 1fr  1fr;
          grid-template-rows: 1fr;
        
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          background: var(--bar-color);
        }
        .card-stats .stat {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          border-right : 2px solid black;
          color: var(--text-color);
          padding:10px;
        }
        .card:hover {
          transform: scale(1.02);
          box-shadow: 5px 5px 15px rgba(0,0,0,.6);
        }
        .card-stats .link{
          transition: .2s all;
          border-right : none;
        }
        .card-stats .link:hover{
          transform: scale(1.06);
          color : cyan;
        }
        </style>
        <div class="card">
          <div class="card-image"><img src="${this._gameData.thumbnail}" alt="thumbnail" /></div>
          <div class="card-text">
          <h2 class = "title">${this._gameData.title}</h2>
          <p>${this._gameData.short_description}</p>
          </div>
          <div class="card-stats">
          <div class="stat">
            <div class="value">4<sup>m</sup></div>
            <div class="type">WINDOWS</div>
          </div>
          <a href="${this._gameData.id}" class="stat link" data-id ="${this._gameData.id}">
            <div class="value">i</div>
            <div class="type">Detail</div>
          </a>
          </div>
        </div>
        `;
  }
}
customElements.define('game-card', GameCard);
