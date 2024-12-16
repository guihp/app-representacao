// Estado inicial
const initialState = {
    trainings: [], // Lista de treinamentos
    loading: false, // Status de carregamento
    error: null, // Mensagem de erro, se houver
  };
  
  // Reducer
  export const treinamentoReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'FETCH_TRAININGS_REQUEST':
        return { ...state, loading: true, error: null };
  
      case 'FETCH_TRAININGS_SUCCESS':
        return { ...state, loading: false, trainings: action.payload };
  
      case 'FETCH_TRAININGS_FAILURE':
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  