import { Dispatch } from 'redux';
import {
  fetchIndustriaService,
  addIndustriaService,
  updateindustriasService,
  deleteindustriasService,
} from '../../services/industriaservices'
// Tipos de ação
export const FETCH_INDUSTRIA_REQUEST = 'FETCH_INDUSTRIA_REQUEST';
export const FETCH_INDUSTRIA_SUCCESS = 'FETCH_INDUSTRIA_SUCCESS';
export const FETCH_INDUSTRIA_FAILURE = 'FETCH_INDUSTRIA_FAILURE';

export const ADD_INDUSTRIA_SUCCESS = 'ADD_INDUSTRIA_SUCCESS';
export const UPDATE_INDUSTRIA_SUCCESS = 'UPDATE_INDUSTRIA_SUCCESS';
export const DELETE_INDUSTRIA_SUCCESS = 'DELETE_INDUSTRIA_SUCCESS';

// Ação para buscar industria
export const fetchIndustria = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_INDUSTRIA_REQUEST });
  try {
    const industria = await fetchIndustriaService();
    dispatch({ type: FETCH_INDUSTRIA_SUCCESS, payload: industria });
  } catch (error: any) {
    const errorMessage =
      error instanceof Error ? error.message : 'Erro desconhecido ao buscar industria.';
    dispatch({ type: FETCH_INDUSTRIA_FAILURE, payload: errorMessage });
  }
};

// Ação para adicionar uma industria
export const addindustria = (industriaData: any) => async (dispatch: Dispatch) => {
  try {
    const newindustria = await addIndustriaService(industriaData);
    dispatch({ type: ADD_INDUSTRIA_SUCCESS, payload: newindustria });
  } catch (error) {
    console.error('Erro ao adicionar industria:', error);
  }
};

// Ação para atualizar uma industria
export const updateindustria = (industriaId: number, industriaData: any) => async (dispatch: Dispatch) => {
  try {
    const updatedStore = await updateindustriasService(industriaId, industriaData);
    dispatch({ type: UPDATE_INDUSTRIA_SUCCESS, payload: updatedStore });
  } catch (error) {
    console.error('Erro ao atualizar industria:', error);
  }
};

// Ação para excluir uma industria
export const deleteindustria = (industriaId: number) => async (dispatch: Dispatch) => {
  try {
    await deleteindustriasService(industriaId);
    dispatch({ type: DELETE_INDUSTRIA_SUCCESS, payload: industriaId });
  } catch (error) {
    console.error('Erro ao excluir loja:', error);
  }
};


export const updateIndustryStatus = (industryId: string, status: string) => ({
  type: 'UPDATE_INDUSTRY_STATUS',
  payload: { industryId, status },
});