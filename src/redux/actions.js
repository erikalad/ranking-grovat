import axios from "axios";

// Action types
export const GET_RANKING_REQUEST = 'GET_RANKING_REQUEST';
export const GET_RANKING_SUCCESS = 'GET_RANKING_SUCCESS';
export const GET_RANKING_FAILURE = 'GET_RANKING_FAILURE';

export const POST_RANKING_REQUEST = 'POST_RANKING_REQUEST';
export const POST_RANKING_SUCCESS = 'POST_RANKING_SUCCESS';
export const POST_RANKING_FAILURE = 'POST_RANKING_FAILURE';

export const DELETE_RANKING_REQUEST = 'DELETE_RANKING_REQUEST';
export const DELETE_RANKING_SUCCESS = 'DELETE_RANKING_SUCCESS';
export const DELETE_RANKING_FAILURE = 'DELETE_RANKING_FAILURE';

// Action creators
export const getRanking = () => {
  return async (dispatch) => {
    dispatch({ type: GET_RANKING_REQUEST });
    try {
      const response = await axios.get('http://localhost:3001/ranking');
      dispatch({ type: GET_RANKING_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_RANKING_FAILURE, payload: error.message });
    }
  };
};

export const postRanking = (postData) => {
  return async (dispatch) => {
    console.log(postData)
    dispatch({ type: POST_RANKING_REQUEST });
    try {
      const response = await axios.post('http://localhost:3001/ranking', postData);
      dispatch({ type: POST_RANKING_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: POST_RANKING_FAILURE, payload: error.message });
    }
  };
};

export const deleteRanking = (id) => {
  return async (dispatch) => {
    console.log(id)
    dispatch({ type: DELETE_RANKING_REQUEST });
    try {
      const response = await axios.delete(`http://localhost:3001/${id}`);
      dispatch({ type: DELETE_RANKING_SUCCESS, payload: id });
    } catch (error) {
      dispatch({ type: DELETE_RANKING_FAILURE, payload: error.message });
    }
  };
};
