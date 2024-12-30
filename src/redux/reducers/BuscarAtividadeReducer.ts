import {
    FETCH_ATIVIDADE_REQUEST,
    FETCH_ATIVIDADE_SUCCESS,
    FETCH_ATIVIDADE_FAILURE,
    ADD_ATIVIDADE_SUCCESS,
    UPDATE_ATIVIDADE_SUCCESS,
    DELETE_ATIVIDADE_SUCCESS,
  } from '../actions/AtividadesActionsAll';
  
  interface Atividade {
    id: number;
    tipo: string;
    usuario_responsavel: number;
    loja: string;
    industria: string;
    data_inicio: string;
    data_fim: string;
    status?: string;
    sincronizado: boolean;
    criado_por: number;
  }
  
  interface AtividadeState {
    loading: boolean;
    atividades: Atividade[];
    error: string | null;
  }
  
  const initialState: AtividadeState = {
    loading: false,
    atividades: [],
    error: null,
  };
  
  export const atividadeReducer = (state = initialState, action: any): AtividadeState => {
    switch (action.type) {
      case FETCH_ATIVIDADE_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_ATIVIDADE_SUCCESS:
        return { ...state, loading: false, atividades: action.payload, error: null };
      case FETCH_ATIVIDADE_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case ADD_ATIVIDADE_SUCCESS:
        return { ...state, atividades: [...state.atividades, action.payload] };
      case UPDATE_ATIVIDADE_SUCCESS:
        return {
          ...state,
          atividades: state.atividades.map((atividade) =>
            atividade.id === action.payload.id ? action.payload : atividade
          ),
        };
      case DELETE_ATIVIDADE_SUCCESS:
        return {
          ...state,
          atividades: state.atividades.filter((atividade) => atividade.id !== action.payload),
        };
      default:
        return state;
    }
  };