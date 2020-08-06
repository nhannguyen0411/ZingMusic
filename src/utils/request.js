export const fetchAPI = async (endpoint, method, body) =>
  await fetch(`http://localhost:5000/${endpoint}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify({ body }) : null,
  });
