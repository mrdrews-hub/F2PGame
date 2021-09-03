class ContentsApp extends HTMLElement{
    set gameData(game){
        this._gameData = game; 
    }

    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML=`
        <div class="container">
            <h1>YOUR CONTENTS</h1>
        </div>
        `
    }
}

customElements.define("contents-app",ContentsApp);