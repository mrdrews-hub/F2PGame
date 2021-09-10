
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
        }
        .logo{
          padding: 26px;
          text-align : center;
        }
        </style>
        <header>
            <h3 class="logo">.FGameInfo</h3>
        </header>
        `;

  }

  toggleNav(){
    const nav = document.querySelector('nav');
    const toggle = document.querySelector('.toggle');
  }
}

customElements.define('navbar-app', NavbarApp);
