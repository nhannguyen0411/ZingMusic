const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://devru-raaga-v1.p.rapidapi.com/json/homepage-v3.asp?l=H";

// export const fetchAPI = () => {
//   return fetch(proxyurl + url, {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "devru-raaga-v1.p.rapidapi.com",
//       "x-rapidapi-key": "79f47fdaebmsh8cf63fd2542bf51p1b7fb6jsnd28e8bb7155b",
//     },
//   });
// };

export const fetchAPI = () => {
  return fetch("http://localhost:5000/product", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
