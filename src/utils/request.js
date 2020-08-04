export const fetchAPI = (endpoint, method, body) =>
  fetch(`http://localhost:5000/${endpoint}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: body ? body : null,
  });
