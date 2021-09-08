class NavbarApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        *{
          margin : 0;
          padding : 0;
        }
        header{
            font-family: 'Roboto Mono', monospace, sans-serif;
            font-weight : bold;
            background-color : var(--bar-color);
            color : var(--text-color);
        }
        .webTitle{
          padding: 26px;
          text-align : center;
        }
        nav{
          position : fixed;
          width : 60px;
          height : 100%;
          background : var(--bar-color);
          transition : .3s;
          overflow : hidden;
        }
        nav:hover{
          width : 300px;
        }
        nav ul{
          position : absolute;
          top : 0;
          left : 0;
          width : 100%;
        }
        nav ul li{
          list-style : none;
          position : relative;
          width : 100%;
        }
        nav ul li:hover{
          background-color : var(--btn-color);
        }
        nav ul li a{
          position : relative;
          display : block;
          width : 100%;
          display : flex;
          text-decoration : none;
          color : var(--text-color);
        }
        nav ul li a .menu{
          position : relative;
          display : block;
          padding : 0 10px;
          height : 60px;
          line-height : 60px;
          text-align : center;
          white-space : nowrap;
        }
        .toggle{
          position : absolute;
          top : 0;
          left : 0;
          width : 60px;
          height : 60px;
          background : var(--bar-color);
          cursor : pointer;
        }
        .toggle:hover{
          background-color : var(--btn-color);
        }
        .toggle .bar{
          position : absolute;
          width : 100%;
          height : 100%;
          line-height : 60px;
          text-align : center;
          color : #FFF;
        }
        .toggle:hover .bar{
          position : absolute;
          width : 100%;
          height : 100%;
          line-height : 60px;
          text-align : center;
          color : #FFF;
        }
        </style>
        <div class="toggle">
        <div class="bar"><i class="fas fa-bars"></i></div>
        </div>
        <header>
            <h3 class="webTitle">.FGameInfo</h3>
            <nav>
              <ul>
                <li>
                  <a href="#">
                    <i class="fas fa-desktop"></i>
                    <span class="menu">PC</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <i class="fab fa-internet-explorer"></i>
                    <span class="menu">Browser</span>
                  </a>
                </li>
              </ul>
            </nav>
        </header>
        `;
  }

  toggleNav(){
    const nav = document.querySelector('nav');
    const toggle = document.querySelector('.toggle');
  }
}

customElements.define('navbar-app', NavbarApp);
