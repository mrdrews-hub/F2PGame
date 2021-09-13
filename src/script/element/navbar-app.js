import './sidebar-app';

class NavbarApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        header{
            font-family: 'Roboto Mono', monospace, sans-serif;
            font-weight : bold;
            background-color : var(--bar-color);
            color : var(--text-color);
            position : sticky;
            top:0;
            z-index : 1;
        }
        .logo{
          padding: 26px;
          text-align : center;
        }
        </style>
        <header>
            <h3 class="logo">.FGameInfo</h3>
            <sidebar-app></sidebar-app>
        </header>
        `;
  }

}

customElements.define('navbar-app', NavbarApp);
