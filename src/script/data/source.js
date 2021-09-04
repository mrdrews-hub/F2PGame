class DataSource {
  static searchGame(keyword) {
    return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.teams) {
          return Promise.resolve(responseData.teams);
        }
        return Promise.reject(`${keyword} is Not Found`);
      });
  }
}

export default DataSource;
