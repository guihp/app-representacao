import { Dispatch } from 'redux';
import {
  fetchAtividadesService,
  addAtividadeService,
  updateAtividadeService,
  deleteAtividadeService,
} from '../../services/Atividades/atividadesService'

// Tipos de ação
export const FETCH_ATIVIDADE_REQUEST = 'FETCH_ATIVIDADE_REQUEST';
export const FETCH_ATIVIDADE_SUCCESS = 'FETCH_ATIVIDADE_SUCCESS';
export const FETCH_ATIVIDADE_FAILURE = 'FETCH_ATIVIDADE_FAILURE';

export const ADD_ATIVIDADE_SUCCESS = 'ADD_ATIVIDADE_SUCCESS';
export const UPDATE_ATIVIDADE_SUCCESS = 'UPDATE_ATIVIDADE_SUCCESS';
export const DELETE_ATIVIDADE_SUCCESS = 'DELETE_ATIVIDADE_SUCCESS';

// Ação para buscar atividades
export const fetchAtividades = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_ATIVIDADE_REQUEST });
  try {
    const atividades = await fetchAtividadesService();
    dispatch({ type: FETCH_ATIVIDADE_SUCCESS, payload: atividades });
  } catch (error: any) {
    const errorMessage =
      error instanceof Error ? error.message : 'Erro desconhecido ao buscar atividades.';
    dispatch({ type: FETCH_ATIVIDADE_FAILURE, payload: errorMessage });
  }
};

// Ação para adicionar uma atividade
export const addAtividade = (atividadeData: any) => async (dispatch: Dispatch) => {
  try {
    const newAtividade = await addAtividadeService(atividadeData);
    dispatch({ type: ADD_ATIVIDADE_SUCCESS, payload: newAtividade });
  } catch (error) {
    console.error('Erro ao adicionar atividade:', error);
  }
};

// Ação para atualizar uma atividade
export const updateAtividade = (atividadeId: number, atividadeData: any) => async (dispatch: Dispatch) => {
  try {
    const updatedAtividade = await updateAtividadeService(atividadeId, atividadeData);
    dispatch({ type: UPDATE_ATIVIDADE_SUCCESS, payload: updatedAtividade });
  } catch (error) {
    console.error('Erro ao atualizar atividade:', error);
  }
};

// Ação para excluir uma atividade
export const deleteAtividade = (atividadeId: number) => async (dispatch: Dispatch) => {
  try {
    await deleteAtividadeService(atividadeId);
    dispatch({ type: DELETE_ATIVIDADE_SUCCESS, payload: atividadeId });
  } catch (error) {
    console.error('Erro ao excluir atividade:', error);
  }
};
