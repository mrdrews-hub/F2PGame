import axios from 'axios';
import './game-detail';
class GameCard extends HTMLElement {
  // constructor() {
  //   super();
  //   this._shadow = this.attachShadow({ mode: 'open' });
  // }

  set gameData(game) {
    this._gameData = game;
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        
        .card{
          display : grid;
          grid-template-columns : 1fr;
          grid-template-rows : 1fr max-content 60px ;
          grid-template-areas : "image" "text" "details" ;
          width: min-content;

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
        .card-image img{
          grid-area: image;
          border-radius : 15px;
        }
        .card-text {
          grid-area: text;
          margin : 0px 15px;
          color : var(--text-color);
        }
        .title{
          text-align : center;
          font-size:28px;
          margin-top: 10px; 
        }
        .card-text p {
          text-align : justify;
          margin-top : 15px;
        }
        .details {
          grid-area : details;
          display : flex;
          justify-content : space-between;
          padding : 15px;
          color : gray;
          font-weight : bold;
          margin-top : 10px;
        }

        </style>

        <a href="#" id="${this._gameData.id}" class="card">
          <div class="card-image">
            <img src="${this._gameData.thumbnail}" alt="thumbnail"/>
          </div>

          <div class="card-text">
            <h2 class = "title">${this._gameData.title}</h2>
          </div>

          <div class="details">
            <div class="platform">${this._gameData.platform}</div>
            <div class="Genre">${this._gameData.genre}</div>
          </div>

        </a>
        `;
    this.querySelector('.card').addEventListener('click', () => {
      const modal = document.createElement('game-detail');
      document.body.append(modal);
      
      axios({
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id : this.querySelector('.card').id },
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key': '1e6841a2a6msh14d9994e0472f17p187ebajsnbfe925f17862',
        },
      })
      .then(response => {
        modal.gameDetail = response.data;
        modal.visible = true;
      });

      modal.addEventListener('cancel', () => {
        modal.visible = "";
        modal.remove();
      });
    });
  }
}
customElements.define('game-card', GameCard);
