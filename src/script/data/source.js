class DataSource {
  static getGames(keyword) {
    return fetch(`https://www.freetogame.com/api/${keyword}`,{
      "method": "GET",
	    "headers": {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "undefined"
      }
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.id) {
          return Promise.resolve(responseData);
        }
        return Promise.reject(`${keyword} is Not Found`);
      });
  }
}

export default DataSource;
