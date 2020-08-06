const initialState = {
  isLoading: false,
  token: "",
  err: "",
};

const userBehaviorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ONPOST": {
      return {
        ...state,
        isLoading: true,
      };
    }

    case "FETCH_LOGIN_ONSUCCESS": {
      return {
        ...state,
        token: action.payload.token,
        err: "",
        isLoading: false,
      };
    }

    case "FETCH_LOGIN_ONFAILURE": {
      return {
        ...state,
        err: action.payload.err,
        isLoading: false,
      };
    }

    case "FETCH_REGISTER_ONSUCCESS": {
      return {
        ...state,
        err: "",
        isLoading: false,
      };
    }

    case "FETCH_REGISTER_ONFAILURE": {
      return {
        ...state,
        err: action.payload.err,
        isLoading: false,
      };
    }

    case "FETCH_ONFAILURE": {
      return {
        ...state,
        err: "Server is overload.",
        isLoading: false,
      };
    }

    case "FETCH_LOGOUT": {
      return {
        ...state,
        token: "",
        err: "",
      };
    }

    default:
      return state;
  }
};

export default userBehaviorReducer;
