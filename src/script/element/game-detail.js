class GameDetail extends HTMLElement {

  set gameDetail(game){
    this._gameData = game;
    this.render();
    this._attachEventHandlers();
  }

  get visible() {
    return this.hasAttribute('visible');
  }

  set visible(value) {
    if (value) {
      this.setAttribute('visible', '');
    } else {
      this.removeAttribute('visible');
    }
  }

  static get observedAttributes() {
    return ['visible'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'visible') {
      if (newValue === null) {
        this.querySelector('.wrapper').classList.remove('visible');
      } else {
        this.querySelector('.wrapper').classList.add('visible');
      }
    }
  }

  _attachEventHandlers() {
    const cancelButton = this.querySelector('.cancel');
    cancelButton.addEventListener('click', (e) => {
      this.dispatchEvent(new CustomEvent('cancel'));
      this.removeAttribute('visible');
    });
  }

  render() {
    this.innerHTML = `
    <style>
    .wrapper {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height : 100%;
      opacity: 0;
      background-color:rgba(9,9,9,.4);
      z-index: 1;
      display: flex;
      justify : center center;
    }
    .visible {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
      transition: visibility 0s linear 0s,opacity .25s 0s,transform .25s;
    }
    .modal {
      color: var(--text-color);
      background-color: var(--main-color);
      width: 80%;
      height : max-content;
      padding: 10px;
      margin : auto;
    }
    .content{
      position: relative;
      display: grid;
      grid-template-areas : 
      "title title"
      "img info"
      "img sysReq";
      grid-template-columns : 1fr 2fr;
      grid-template-rows : repeat(3,max-content);
      padding : 0px 30px;
    }
    .content .label{
      color : #bbb;
      font-weight : bold;
    }
    .content .title {
      grid-area : title;
      font-size: 2em;
      font-weight : bold;
      margin-bottom : 10px;
    }
    .thumb .publisher{
      justify-self : space-between;
      padding : 15px;
      font-size : 1.2em;
    }
    .content .thumb{
      grid-area : img;
    }
    .content .information{
      grid-area : info;
      padding-left : 15px;
    }
    .information .info-txt{
      margin : 15px 0px;
      font-size : 1.2em;
      border-bottom : 2px solid rgba(255,255,255,.4);
    }
    .content .sysReq{
      grid-area : sysReq;
      display : grid;
      grid-template-areas : 
      "title title"
      "left right";
      grid-template-rows : repeat(2,max-content);
      grid-template-columns : 1fr 1fr;
      margin-bottom : 15px;
    }
    .content .sysReq .Subtitle{
      grid-area : title;
      text-align : center;
      margin : 20px 0px;
    }
    .LeftSide{
      grid-area : left;
    }
    .leftSide span,p{
      margin : 10px;
    }
    .RightSide{
      grid-area : right;
    }
    .rightSide span,p{
      margin : 10px;
    }
    .button-container{
      text-align: right;
    }
    .button-container a{
      cursor: pointer;
      font-size:2em;
      transition: ease-in .2s;
    }
    .button-container a:hover{
      color: red;
    }@media (max-width: 768px) {
      .content{
        position: relative;
        display: flex;
        padding : 0px 30px;
      }
     }
  </style>

  <div class='wrapper'>
    <div class='modal'>

      <div class='button-container'>
        <a class="cancel"><i class="fas fa-times"></i></a>
      </div>

      <div class='content'>
        
      <div class="title">${this._gameData.title}</div>

      <div class="thumb">
       <img src="${this._gameData.thumbnail}" alt="">
      </div>

       <div class="information">
       <p class="info-txt"><span class="label">Publisher : </span>${this._gameData.publisher}</p>
       <p class="info-txt"><span class="label">Developer : </span>${this._gameData.developer}</p>
       <p class="info-txt"><span class="label">Release : </span>${this._gameData.release_date}</p>
       <p class="info-txt"><span class="label">Platform : </span>${this._gameData.platform}</p>
       <p class="info-txt">${this._gameData.short_description}</p>
       </div>
       
       <div class="sysReq">
         <h3 class="Subtitle">Minimum System Requirement : </h3>
        <div class="LeftSide">
          <p><span class="label">OS : </span>${this._gameData.minimum_system_requirements.os}</p> 
          <p><span class="label">Processor : </span>${this._gameData.minimum_system_requirements.processor}</p>
          <p><span class="label">Memory : </span>${this._gameData.minimum_system_requirements.memory}</p>
        </div>
        <div class="RightSide">
          <p><span class="label">Graphic : </span>${this._gameData.minimum_system_requirements.graphics}</p>
          <p><span class="label">Storage : </span>${this._gameData.minimum_system_requirements.storage}</p>
        </div>
       </div>

      </div>
      
    </div>
  </div>
    `;
  }
}
customElements.define('game-detail', GameDetail);
