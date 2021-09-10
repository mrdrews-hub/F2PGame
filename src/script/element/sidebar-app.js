class SidebarApp extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    aside{
      position : fixed;
      left : -260px;
      width : 250px;
      height : 100%;
      background-color : var(--bar-color);
    }
    aside .menu-title{
      color : var(--text-color);
      background : var(--main-color);
      line-height : 50px;
      padding-left : 10px;
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
      z-index : 11111;
      left : 195px;
      top : 17px;
      font-size : 1.8em;
      color : red;
      padding : 4px 9px;
    }
    #check:checked ~ aside{
      left:0;
    }
    </style>

    <input type="checkbox" id="check">
    <label for="check">
      <i class="fas fa-bars" id="active"></i>
      <i class="fas fa-times" id="close"></i>
    </label>
    <aside>
      <h3 class="menu-title">Sort By</h3>
      <ul>
      <li><a href ="#"><i class="fab fa-windows"></i> Windows</a></li>
      <li><a href ="#"><i class="fab fa-windows"></i> Browser</a></li>
      <li><a href ="#"><i class="fab fa-windows"></i> Popularity</a></li>
      <li><a href ="#"><i class="fab fa-windows"></i> Release Date</a></li>
      </ul>
    </aside>
        `;
  }
}
customElements.define('sidebar-app', SidebarApp);
