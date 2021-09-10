class MainApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        main{
            display : block;
            margin : 35px 25px;
            background-color : #364F6B;
        }
        contents-app{
          background-color : #364F6B;
          color : var(--text-color);
          padding : 1.1em;
          display : flex;
          justify-content : space-around;
          
      }
        </style>
        <main>
        <contents-app></contents-app>
        </main>   
        `;
  }
}

customElements.define('main-app', MainApp);
