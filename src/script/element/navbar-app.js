class NavbarApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        nav{
            font-family: 'Roboto Mono', monospace, sans-serif;
            font-weight : bold;
            background-color : var(--bar-color);
            color : var(--text-color);
            padding: 25px;
        }
        </style>

        <nav>
            FGAMEINFO
        </nav>
        `;
  }
}

customElements.define('navbar-app', NavbarApp);
