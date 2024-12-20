import { Dispatch } from 'redux';
import {
  fetchStoresService,
  addStoreService,
  updateStoreService,
  deleteStoreService,
} from '../../services/storeservices';

// Tipos de ação
export const FETCH_STORES_REQUEST = 'FETCH_STORES_REQUEST';
export const FETCH_STORES_SUCCESS = 'FETCH_STORES_SUCCESS';
export const FETCH_STORES_FAILURE = 'FETCH_STORES_FAILURE';

export const ADD_STORE_SUCCESS = 'ADD_STORE_SUCCESS';
export const UPDATE_STORE_SUCCESS = 'UPDATE_STORE_SUCCESS';
export const DELETE_STORE_SUCCESS = 'DELETE_STORE_SUCCESS';

// Ação para buscar lojas
export const fetchStores = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_STORES_REQUEST });
  try {
    const stores = await fetchStoresService();
    dispatch({ type: FETCH_STORES_SUCCESS, payload: stores });
  } catch (error: any) {
    const errorMessage =
      error instanceof Error ? error.message : 'Erro desconhecido ao buscar lojas.';
    dispatch({ type: FETCH_STORES_FAILURE, payload: errorMessage });
  }
};

// Ação para adicionar uma loja
export const addStore = (storeData: any) => async (dispatch: Dispatch) => {
  try {
    const newStore = await addStoreService(storeData);
    dispatch({ type: ADD_STORE_SUCCESS, payload: newStore });
  } catch (error) {
    console.error('Erro ao adicionar loja:', error);
  }
};

// Ação para atualizar uma loja
export const updateStore = (storeId: number, storeData: any) => async (dispatch: Dispatch) => {
  try {
    const updatedStore = await updateStoreService(storeId, storeData);
    dispatch({ type: UPDATE_STORE_SUCCESS, payload: updatedStore });
  } catch (error) {
    console.error('Erro ao atualizar loja:', error);
  }
};

// Ação para excluir uma loja
export const deleteStore = (storeId: number) => async (dispatch: Dispatch) => {
  try {
    await deleteStoreService(storeId);
    dispatch({ type: DELETE_STORE_SUCCESS, payload: storeId });
  } catch (error) {
    console.error('Erro ao excluir loja:', error);
  }
};
