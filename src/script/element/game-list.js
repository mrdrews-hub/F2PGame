class GameList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        .card{
           display : grid;
           grid-template-column : 150px;
           grid-template-rows : 210px 180px 60px;
           grid-template-areas : "image" "text" "stats";

           border-radius : 18px;
           background : var(--bg-color);
           box-shadow : 5px 5px 15px rgba(0,0,0,.9);
           box-sizing : border-box;

           transition: .3s ease;
           margin:15px;
           cursor : pointer;
        }
        .title{
          text-align : center;
          font-size:28px;
        }
        .card-image {
          grid-area: image;
        }
        .card-text {
          grid-area: text;
          margin : 15px;
          color : var(--text-color);
        }
        .card-stats {
          grid-area: stats; 
        }
        .card-image {
          grid-area: image;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          background-size: cover;
        }
        .card-text .info {
          text-align : left;
          color : gray;
          font-weight : bold;
          margin-bottom : 25px;
        }
        .card-text p {
          text-align : justify;
          margin : 10px 0px;
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
        
          color: var(--text-color);
          padding:10px;
        }
        .card:hover {
          transform: scale(1.02);
          box-shadow: 5px 5px 15px rgba(0,0,0,.6);
        }
        .card-stats .link{
          transition: .2s all;
        }
        .card-stats .link:hover{
          transform: scale(1.06);
          color : cyan;
        }
        </style>
        <div class="card">
          <div class="card-image"><img src="https://www.freetogame.com/g/473/thumbnail.jpg" alt="thumbnail" /></div>
          <div class="card-text">
          <h2 class = "title">DAUNTLESS</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt aliquam nihil recusandae tempore distinctio molestiae doloribus soluta, ab ipsam.</p>
          <span class="info">Release Date : 21 May 2019</span><br>
          <span class="info">Genre : MMORPG </span>
          </div>
          <div class="card-stats">
          <div class="stat">
            <div class="value">4<sup>m</sup></div>
            <div class="type">WINDOWS</div>
          </div>
          <a href="#" class="stat link">
            <div class="value">i</div>
            <div class="type">Detail</div>
          </a>
          </div>
        </div>
        `;
  }
}
customElements.define('game-list', GameList);
