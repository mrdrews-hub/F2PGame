import './contents-app.js';
import './sidebar-app.js';

class MainApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        main{
            display : flex;
            margin : 35px 25px;
        }
        contents-app{
            background-color : #364F6B;
            color : var(--text-color);
            margin-right : 1em;
            flex-basis : 70%;
            order : 1;
            padding : 1.1em;
        }
        sidebar-app{
            background-color:var(--main-color);
            color : var(--text-color);
            flex-basis : 30%;
            order : 2;
            padding : 1.2em
        }
        </style>
        <main>
        <contents-app></contents-app>
        <sidebar-app></sidebar-app>
        </main>   
        `;
  }
}

customElements.define('main-app', MainApp);
