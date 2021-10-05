class TagbarApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickevent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        .tagContainer{
            display: flex;
            justify-content : center;
            padding: 30px;
          }
          .tagContainer .tagbtn{
            padding: 10px;
            background-color: var(--btn-color);
            margin : 5px;
            border-radius : 25px;
            text-decoration : none;
            font-weight : bold; 
            text-align : center;
            color : var(--text-color);
            transition: ease .3s;
          }
          .tagContainer .tagbtn:hover{
            background-color : var(--bar-color);  
          }
          .tagContainer .active {
            background-color : var(--bar-color); 
          }
          @media (max-width : 768px){
            .tagContainer{
              display: flex;
              justify-content : center;
              padding: 30px;
              flex-wrap : wrap;
            }
          }
        </style>
        <div class="tagContainer">
        <a href="#" class="tagbtn">MMORPG</a>
        <a href="#" class="tagbtn">Shooter</a>
        <a href="#" class="tagbtn">Moba</a>
        <a href="#" class="tagbtn">Open-World</a>
        <a href="#" class="tagbtn">Survival</a>
        <a href="#" class="tagbtn">Action</a>
        </div>
        `;
    this.querySelectorAll('.tagbtn').forEach((el) => {
      el.addEventListener('click', this._clickevent);
    });
  }
}
customElements.define('tagbar-app', TagbarApp);
