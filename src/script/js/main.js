import  "../element/contents-app";
const axios = require('axios').default;
const URL = "https://free-to-play-games-database.p.rapidapi.com/api/";

const main = () => {

  function getGames(){
    axios.request({
      method: "GET",
      url : `${URL}games`,
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "1e6841a2a6msh14d9994e0472f17p187ebajsnbfe925f17862"
      }
    })
    .then(responseData => {
      console.log(responseData);
      renderAllGames(responseData.data)
    })
    .catch(err => console.log(err));
  }


  function getByCategories(keyword){
    axios.request({
      method: "GET",
      url : `${URL + keyword}`,
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "1e6841a2a6msh14d9994e0472f17p187ebajsnbfe925f17862"
      }
    })
    .then(responseData => renderAllGames(responseData.data))
    .catch(err => console.log(err));
  }

  const renderAllGames = (games) => {
    const contentsApp = document.querySelector('contents-app');
    contentsApp.gameData = games
  }

  getGames();

}


export default main;
