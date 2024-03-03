import { DELETE_RANKING_FAILURE, DELETE_RANKING_REQUEST, DELETE_RANKING_SUCCESS, GET_RANKING_FAILURE, GET_RANKING_REQUEST, GET_RANKING_SUCCESS, POST_RANKING_FAILURE, POST_RANKING_REQUEST, POST_RANKING_SUCCESS } from "./actions";

const initialState = {
    ranking: [],
    loading: false,
    error: null
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_RANKING_REQUEST:
      case POST_RANKING_REQUEST:
      case DELETE_RANKING_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case GET_RANKING_SUCCESS:
        return {
          ...state,
          ranking: action.payload,
          loading: false,
          error: null
        };
      case POST_RANKING_SUCCESS:
        return {
          ...state,
          ranking: [...state.ranking, action.payload],
          loading: false,
          error: null
        };
      case DELETE_RANKING_SUCCESS:
        return {
          ...state,
          ranking: state.ranking.filter(item => item.id !== action.payload),
          loading: false,
          error: null
        };
      case GET_RANKING_FAILURE:
      case POST_RANKING_FAILURE:
      case DELETE_RANKING_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;