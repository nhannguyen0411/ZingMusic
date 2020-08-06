import { fetchAPI } from "../utils/request";
import { Login, Post, Register } from "../constant";
// import { useHistory } from "react-router-dom";
// const history = useHistory();

export const fetchLoginOnSuccess = (payload) => ({
  type: "FETCH_LOGIN_ONSUCCESS",
  payload,
});

export const fetchRegisterOnSuccess = (payload) => ({
  type: "FETCH_REGISTER_ONSUCCESS",
  payload,
});

export const fetchOnFailure = (err) => ({
  type: "FETCH_ONFAILURE",
  err,
});

export const fetchOnPost = () => ({
  type: "FETCH_ONPOST",
});

export const fetchLoginOnFailure = (payload) => ({
  type: "FETCH_LOGIN_ONFAILURE",
  payload,
});

export const fetchRegisterOnFailure = (payload) => ({
  type: "FETCH_REGISTER_ONFAILURE",
  payload,
});

export const fetchLoginRequest = (values, fnc) => (dispatch) => {
  dispatch(fetchOnPost());
  return fetchAPI(Login, Post, values)
    .then((res) => res.json())
    .then((json) => {
      if (json.success) {
        setTimeout(() => {
          dispatch(fetchLoginOnSuccess(json));
          localStorage.setItem("token", json.token);
          fnc();
        }, 1000);
      } else {
        dispatch(fetchLoginOnFailure(json));
      }
    })
    .catch((err) => {
      fetchOnFailure(err);
    });
};

export const fetchRegisterRequest = (values, fnc) => (dispatch) => {
  dispatch(fetchOnPost());
  return fetchAPI(Register, Post, values)
    .then((res) => res.json())
    .then((json) => {
      if (json.success) {
        setTimeout(() => {
          dispatch(fetchRegisterOnSuccess(json));
          localStorage.setItem("token", json.token);
          fnc();
        }, 1000);
      } else {
        setTimeout(() => {
          dispatch(fetchRegisterOnFailure(json));
        }, 300);
      }
    })
    .catch((err) => {
      fetchOnFailure(err);
    });
};

export const fetchLogoutRequest = () => ({
  type: "FETCH_LOGOUT",
});
