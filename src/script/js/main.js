import DataSource from '../data/source';

function main() {
  const contentsApp = document.querySelector('contents-app');
  const sidebar = document.querySelector('sidebar-app');
  const tagbtn = document.querySelector('tagbar-app');

  const renderAllGames = (games) => {
    contentsApp.gameData = games;
  };
  const renderError = (response) => {
    contentsApp.renderError(response);
  };

  DataSource.getAllGames()
    .then(renderAllGames)
    .catch(renderError)

  const onBtnCategoryClicked = (element) => {
    DataSource.filterGame(element.target.id)
      .then(renderAllGames)
      .catch(renderError);
  };
  const onBtnTagClicked = (element) => {
    contentsApp.title = element.target.innerText;
    DataSource.getByTag(element.target.innerText.toLowerCase())
      .then(renderAllGames)
      .catch(renderError);
  };

  sidebar.clickEvent = onBtnCategoryClicked;
  tagbtn.clickEvent = onBtnTagClicked;

}

export default main;
