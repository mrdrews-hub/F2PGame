import DataSource from "../data/source.js";

function main() {

  const contentsApp = document.querySelector('contents-app');
  const sidebar = document.querySelector('sidebar-app');

  const renderAllGames = games => contentsApp.gameData = games;
  
  DataSource.getAllGames()
  .then(renderAllGames)
  .catch();

  const onBtnClicked = (as) => {
    DataSource.getByCategories(as.target.id)
    .then(renderAllGames)
    .catch()
  }
  sidebar.clickEvent = onBtnClicked;

}


export default main;
