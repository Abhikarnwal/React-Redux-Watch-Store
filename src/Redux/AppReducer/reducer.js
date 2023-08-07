// NOTE: DO NOT MODIFY the intial state structure in this file.

import { GET_WATCHES_DATA_REQUEST } from "./actionType";
import { GET_WATCHES_DATA_SUCCESS } from "./actionType";
import { GET_WATCHES_DATA_FAILURE } from "./actionType";
import { FILTER_WATCH_DATA } from "./actionType";

const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
  filteredData: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_WATCHES_DATA_REQUEST: {
      return { ...state, isLoading: true };
    }

    case GET_WATCHES_DATA_SUCCESS: {
      return { ...state, watches: action.payload, isLoading: false };
    }

    case GET_WATCHES_DATA_FAILURE: {
      return { ...state, watches: action.payload, isError: true };
    }

    case FILTER_WATCH_DATA: {
      return { ...state, filteredData: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
