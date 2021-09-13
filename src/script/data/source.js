import axios from "axios";
class DataSource {

  static getAllGames() {

      const URL  = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
      return axios({
        method: "GET",
        url : URL,
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key": "1e6841a2a6msh14d9994e0472f17p187ebajsnbfe925f17862"
        }
      })
      .then(responseData => {
          if (responseData.status == 200) { 
              return Promise.resolve(responseData.data) 
          }else{  
              return Promise.reject(`BLOK`) 
          }
      })  
  }
  
  static getByCategories(keyword){
    const URL = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
    return axios({
      method: "GET",
      url : URL,
      params : {'sort-by' : keyword},
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "1e6841a2a6msh14d9994e0472f17p187ebajsnbfe925f17862"
      }
    })
    .then(responseData => {
      console.log(responseData);
        if (responseData.status == 200) { 
            return Promise.resolve(responseData.data) 
        }else{  
            return Promise.reject(`BLOK`) 
        }
    })
  }
}

export default DataSource;
