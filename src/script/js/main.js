import  "../element/contents-app";

const main = () => {

  function getGames(){
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "1e6841a2a6msh14d9994e0472f17p187ebajsnbfe925f17862"
      }
    })
    .then(response => response.json())
    .then(responseData => {
      // const content = document.querySelector('contents-app');
      // for(let i = 0 ; i < 10; i++){
      //   content.gameData = responseData[i];
      // }
      renderAllGames(responseData) 
    })
    .catch(err => console.log(err));
  }

  const renderAllGames = (games) => {
    const mainApp = document.querySelector('contents-app');
    mainApp.gameData = games
  }

  getGames();

}


export default main;
