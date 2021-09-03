class SidebarApp extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `       
            <div class="container">
            <h1 class="a">SIDEBAR APP</h1>
            </div>
        `
    }
}
customElements.define("sidebar-app",SidebarApp);