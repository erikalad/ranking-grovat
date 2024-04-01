import { DELETE_RANKING_FAILURE, DELETE_RANKING_REQUEST, DELETE_RANKING_SUCCESS, GET_RANKING_FAILURE, GET_RANKING_REQUEST, GET_RANKING_SUCCESS, POST_RANKING_FAILURE, POST_RANKING_REQUEST, POST_RANKING_SUCCESS } from "./actions";

const initialState = {
    ranking: [{
      "id_demo":"20e0116a-ffca-4f16-84ab-9950dcbe19c7",
      "fechaAgenda":"2024-03-01",
      "fechaDemo":"2024-03-07",
      "setter":"Lucas",
      "createdAt":"2024-03-05",
      "updatedAt":"2024-03-05"
    },
    {
      "id_demo":"3cbee8d2-43bc-4fe5-bfb6-2e7f92524b0f",
      "fechaAgenda":"2024-03-05",
      "fechaDemo":"2024-03-15",
      "setter":"Lourdes",
      "createdAt":"2024-03-06",
      "updatedAt":"2024-03-06"
    },
    {
      "id_demo":"e8fddb2f-579d-45dd-b4c0-a619dd2fc818",
      "fechaAgenda":"2024-03-01",
      "fechaDemo":"2024-03-06",
      "setter":"Lourdes",
      "createdAt":"2024-03-06",
      "updatedAt":"2024-03-06"
    },
    {
      "id_demo":"57dbedd0-d103-4238-8729-3eab5bc9b8d7",
      "fechaAgenda":"2024-03-11",
      "fechaDemo":"2024-03-15",
      "setter":"Lucas",
      "createdAt":"2024-03-11",
      "updatedAt":"2024-03-11"
    },
    ////
    {
      "id_demo":"8001cf2a-de39-4799-b500-c5d8f7f50967",
      "fechaAgenda":"2024-03-11",
      "fechaDemo":"2024-03-15",
      "setter":"Lucas",
      "createdAt":"2024-03-12",
      "updatedAt":"2024-03-12"
    },
    {
      "id_demo":"cc14df2d-566a-4ed4-a081-b512de7090bc",
      "fechaAgenda":"2024-03-14",
      "fechaDemo":"2024-03-15",
      "setter":"Lucas",
      "createdAt":"2024-03-14",
      "updatedAt":"2024-03-14"
    },
    {
      "id_demo":"5d8cb602-9a8e-4166-8e03-1f8e218520e2",
      "fechaAgenda":"2024-03-15",
      "fechaDemo":"2024-03-20",
      "setter":"Lucas",
      "createdAt":"2024-03-15",
      "updatedAt":"2024-03-15"
    },
    {
      "id_demo":"2048e197-67de-4914-88d9-154bccedece0",
      "fechaAgenda":"2024-03-19",
      "fechaDemo":"2024-03-20",
      "setter":"Lourdes",
      "createdAt":"2024-03-19",
      "updatedAt":"2024-03-19"
    },
    {
      "id_demo":"d6853554-1c5a-478c-8cdf-845370fb7130",
      "fechaAgenda":"2024-03-19",
      "fechaDemo":"2024-03-19",
      "setter":"Lourdes",
      "createdAt":"2024-03-19",
      "updatedAt":"2024-03-19"
    },
    {
      "id_demo":"b9ae300e-ffc6-453a-95fd-02e127264cca",
      "fechaAgenda":"2024-03-19",
      "fechaDemo":"2024-03-19",
      "setter":"Lourdes",
      "createdAt":"2024-03-19",
      "updatedAt":"2024-03-19"
    },
    {
      "id_demo":"e67dc3d2-b130-4f6d-b327-0ff83f38324f",
      "fechaAgenda":"2024-03-20",
      "fechaDemo":"2024-03-25",
      "setter":"Lourdes",
      "createdAt":"2024-03-20",
      "updatedAt":"2024-03-20"
    },
    {
      "id_demo":"18316dc2-0007-4384-a81c-d2b52d8a044c",
      "fechaAgenda":"2024-03-20",
      "fechaDemo":"2024-03-25",
      "setter":"Lourdes",
      "createdAt":"2024-03-20",
      "updatedAt":"2024-03-20"
    },
    {
      "id_demo":"9b5c2c91-8f9c-4e6f-9f79-86248271a736",
      "fechaAgenda":"2024-03-19",
      "fechaDemo":"2024-04-22",
      "setter":"Juan",
      "createdAt":"2024-03-20",
      "updatedAt":"2024-03-20"
    },
    {
      "id_demo":"7e7a2a00-0bcd-4d67-8f23-63a130e7b3ab",
      "fechaAgenda":"2024-03-20",
      "fechaDemo":"2024-03-21",
      "setter":"Lourdes",
      "createdAt":"2024-03-20",
      "updatedAt":"2024-03-20"
    },
    {
      "id_demo":"a882671b-b05c-4c64-ab76-b22756a3c59b",
      "fechaAgenda":"2024-03-20",
      "fechaDemo":"2024-03-25",
      "setter":"Lourdes",
      "createdAt":"2024-03-20",
      "updatedAt":"2024-03-20"
    },
    {
      "id_demo":"4ab530f2-5389-41ca-a3d2-68195e401eba",
      "fechaAgenda":"2024-03-20",
      "fechaDemo":"2024-03-21",
      "setter":"Lucas",
      "createdAt":"2024-03-20",
      "updatedAt":"2024-03-20"
    },
    {
      "id_demo":"aaaabe1c-e1da-409e-809c-8276ecce31cd",
      "fechaAgenda":"2024-03-20",
      "fechaDemo":"2024-03-21",
      "setter":"Lucas",
      "createdAt":"2024-03-20",
      "updatedAt":"2024-03-20"
    },
    {
      "id_demo":"646858d5-868b-48e6-92c8-f96984005e2a",
      "fechaAgenda":"2024-03-21",
      "fechaDemo":"2024-03-25",
      "setter":"Lourdes",
      "createdAt":"2024-03-21",
      "updatedAt":"2024-03-21"
    },
    {
      "id_demo":"26be6c58-8d81-4db9-9a36-e76a7707a95e",
      "fechaAgenda":"2024-03-21",
      "fechaDemo":"2024-03-31",
      "setter":"Sol",
      "createdAt":"2024-03-27",
      "updatedAt":"2024-03-27"
    }
  ],
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