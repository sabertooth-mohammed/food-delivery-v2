import * as actionTypes from '../actionTypes';


const initialState = {
  data:[],
  loading:false,
  error:[],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_LOADING:
      return {
        ...state,
        loading:true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        data:action.payload,
        loading:false,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
       error:action.payload,
       loading:false,
      };
    default:
      return { ...state };
  }
};
export default authReducer;
