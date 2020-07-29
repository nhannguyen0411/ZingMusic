const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://devru-raaga-v1.p.rapidapi.com/json/homepage-v3.asp?l=H";

export const fetchHappyVideoListRequest = () => {
  return (dispatch) => {
    return fetch(proxyurl + url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "devru-raaga-v1.p.rapidapi.com",
        "x-rapidapi-key": "79f47fdaebmsh8cf63fd2542bf51p1b7fb6jsnd28e8bb7155b",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("run redux", json.genrelist);
        dispatch(fetchHappyVideoList(json.genrelist));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchHappyVideoList = (genreList) => {
  return {
    type: "FETCH_HAPPYVIDEOLIST",
    genreList,
  };
};
