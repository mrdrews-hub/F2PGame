import DataSource from '../data/source';
function main() {
  const contentsApp = document.querySelector('contents-app');
  const sidebar = document.querySelector('sidebar-app');
  const tagbtn = document.querySelector('tagbar-app');

  const renderAllGames = (games) => contentsApp.gameData = games;

  DataSource.getAllGames()
    .then(renderAllGames)
    .catch();

  const onBtnCategoryClicked = (element) => {
    DataSource.getByCategories(element.target.id)
      .then(renderAllGames)
      .catch();
  };
  const onBtnTagClicked = (element) => {
    DataSource.getByTag(element.target.innerText.toLowerCase())
    .then(renderAllGames)
    .catch();
  }
  sidebar.clickEvent = onBtnCategoryClicked;
  tagbtn.clickEvent = onBtnTagClicked;
}

export default main;
