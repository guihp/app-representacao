import {
    FETCH_STORES_REQUEST,
    FETCH_STORES_SUCCESS,
    FETCH_STORES_FAILURE,
    ADD_STORE_SUCCESS,
    UPDATE_STORE_SUCCESS,
    DELETE_STORE_SUCCESS,
  } from '../actions/storeactions';
  
  interface StoreState {
    stores: any[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: StoreState = {
    stores: [],
    loading: false,
    error: null,
  };
  
  export const storeReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_STORES_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_STORES_SUCCESS:
        return { ...state, loading: false, stores: action.payload };
      case FETCH_STORES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case ADD_STORE_SUCCESS:
        return { ...state, stores: [...state.stores, action.payload] };
      case UPDATE_STORE_SUCCESS:
        return {
          ...state,
          stores: state.stores.map((store) =>
            store.id === action.payload.id ? action.payload : store
          ),
        };
      case DELETE_STORE_SUCCESS:
        return {
          ...state,
          stores: state.stores.filter((store) => store.id !== action.payload),
        };
      default:
        return state;
    }
  };
  