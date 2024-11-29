import { loginUser } from '../../services/auth/authService'; // Importa a função de login do authService

// Ação para fazer o login do usuário
export const login = (cpf: string, senha: string) => async (dispatch: any) => {
  dispatch({ type: 'LOGIN_REQUEST' }); // Dispara o início do login

  try {
    // Chama a função de login do authService
    const response = await loginUser(cpf, senha);

    if (response.success) {
      console.log('Usuário logado:', response.user);
      // Dispara uma ação de sucesso se o login funcionar
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response.user, // O usuário logado é salvo no estado global
      });
    } else {
      // Dispara uma ação de erro caso o login falhe
      dispatch({
        type: 'LOGIN_FAILURE',
        error: response.message,
      });
    }
  } catch (error: any) {
    // Dispara uma ação de erro caso haja uma falha no processo
    dispatch({
      type: 'LOGIN_FAILURE',
      error: error.message,
    });
  }
};


export const logout = () => ({
  type: 'LOGOUT',
});
