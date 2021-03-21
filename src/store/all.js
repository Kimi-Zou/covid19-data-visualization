const initialState = {
  today: null,
  yesterday: null,
  twoDaysAgo: null
};

// Action Types
const SET_TODAY = 'all/SET_TODAY';
const SET_YESTERDAY = 'all/SET_YESTERDAY';
const SET_TWO_DAYS_AGO = 'all/SET_TWO_DAYS_AGO';

// ---------------- POJO actions -------------------
export const setToday = (data) => ({
  type: SET_TODAY,
  payload: data
});

export const setYesterday = (data) => ({
  type: SET_YESTERDAY,
  payload: data
});

export const setTwoDaysAgo = (data) => ({
  type: SET_TWO_DAYS_AGO,
  payload: data
});

// ---------------- Thunk actions -------------------
export const getToday = () => async dispatch => {
  const res = await fetch('https://disease.sh/v3/covid-19/all');
  const data = await res.json();
  dispatch(setToday(data));
};

export const getYesterday = () => async dispatch => {
  const res = await fetch('https://disease.sh/v3/covid-19/all?yesterday');
  const data = await res.json();
  dispatch(setYesterday(data));
};

export const getTwoDaysAgo = () => async dispatch => {
  const res = await fetch('https://disease.sh/v3/covid-19/all?twoDaysAgo');
  const data = await res.json();
  dispatch(setTwoDaysAgo(data));
};

// ---------------- Reducer -------------------
const allReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODAY:
      return {
        ...state,
        today: action.payload
      };
    case SET_YESTERDAY:
      return {
        ...state,
        yesterday: action.payload
      };
    case SET_TWO_DAYS_AGO:
      return {
        ...state,
        twoDaysAgo: action.payload
      };
    default:
      return state;
  }
};

export default allReducer;
