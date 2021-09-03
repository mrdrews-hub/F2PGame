class GameList extends HTMLElement{
    set gameData(game){
        this._gameData = game;
        this.render();
    }

}