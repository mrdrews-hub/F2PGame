class SidebarApp extends HTMLElement {
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
    aside{
      position : fixed;
      top:10px;
      left : -260px;
      width : 250px;
      height : 100%;
      background-color : var(--bar-color);
      transition : all .3s;
    }
    aside .menu-title{
      color : var(--text-color);
      background : var(--main-color);
      line-height : 50px;
      padding-left : 10px;
      user-select : none;
    }
    aside ul a {
      display : block;
      height : 100%;
      width : 100%;
      line-height : 50px;
      font-size : 1.1em;
      color : var(--text-color);
      padding-left : 20px;
      border-top : 2px solid rgba(255,255,255,.2);
      border-bottom : 2px solid rgba(255,255,255,.2);
      transition : all .3s;
      text-decoration : none;
    }
    ul li:hover a{
      padding-left : 30px;
      transform : scale(104%);
    }
    #check{
      display : none;
    }
    label #active,label #close{
      position : absolute;
      cursor : pointer;
    }
    label #active{
      left : 40px;
      top : 25px;
      font-size : 2em;
      color : white;
    }
    label #close{
      font-size : 2em;
      z-index : 2;
      left : -260px;
      top : 17px;
      transition : all .3s;
    }
    #check:checked ~ aside{
      left:0;
    }
    #check:checked ~ label #close{
      left : 229px;;
    }
    </style>

    <input type="checkbox" id="check">
    <label for="check">
      <i class="fas fa-bars" id="active"></i>
      <i class="fas fa-angle-left" id="close"></i>
    </label>
    <aside>
      <h3 class="menu-title">Sort By</h3>
      <ul>
      <li><a href ="#" class="sort" id="popularity"><i class="fas fa-fire"></i> Popularity</a></li>
      <li><a href ="#" class="sort" id="release-date"><i class="fas fa-sort-numeric-down"></i> Release Date</a></li>
      <li><a href ="#" class="sort" id="alphabetical"><i class="fas fa-sort-alpha-down"></i> Alphabetical</a></li>
      </ul>
    </aside>
        `;
    this.querySelectorAll('.sort').forEach((el) => el.addEventListener('click', this._clickevent));
  }
}
customElements.define('sidebar-app', SidebarApp);
