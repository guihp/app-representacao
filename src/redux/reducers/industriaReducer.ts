import {
    FETCH_INDUSTRIA_REQUEST,
    FETCH_INDUSTRIA_SUCCESS,
    FETCH_INDUSTRIA_FAILURE,
    ADD_INDUSTRIA_SUCCESS,
    UPDATE_INDUSTRIA_SUCCESS,
    DELETE_INDUSTRIA_SUCCESS,
  } from '../actions/industriaActions';
  
  interface IndustriaState {
    Industria: any[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: IndustriaState = {
    Industria: [],
    loading: false,
    error: null,
  };
  
  export const industriaReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_INDUSTRIA_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_INDUSTRIA_SUCCESS:
        return { ...state, loading: false, Industria: action.payload };
      case FETCH_INDUSTRIA_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case ADD_INDUSTRIA_SUCCESS:
        return { ...state, Industria: [...state.Industria, action.payload] };
      case UPDATE_INDUSTRIA_SUCCESS:
        return {
          ...state,
          Industria: state.Industria.map((Industria) =>
            Industria.id === action.payload.id ? action.payload : Industria
          ),
        };
      case DELETE_INDUSTRIA_SUCCESS:
        return {
          ...state,
          Industria: state.Industria.filter((Industria) => Industria.id !== action.payload),
        };
      default:
        return state;
    }
  };
  