import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginWithStrava, refreshToken } from '../auth';

const useAuthStore = create((set) => ({
  accessToken: null,
  refreshToken: null,
  isAuth: false,
  
  // Función para establecer el estado de autenticación
  setAuth: (value) => set({ isAuth: value }),

  // Función para iniciar sesión
  login: async () => {
    try {
      const result = await loginWithStrava();
      set({
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        isAuth: true,
      });

      // Guardar tokens en AsyncStorage
      await AsyncStorage.setItem('accessToken', result.accessToken);
      await AsyncStorage.setItem('refreshToken', result.refreshToken);
    } catch (error) {
      console.error('Error during login:', error);
    }
  },

  // Función para refrescar el token
  refresh: async () => {
    try {
      const { refreshToken: currentRefreshToken } = useAuthStore.getState();
      if (!currentRefreshToken) {
        throw new Error('No refresh token available');
      }

      const result = await refreshToken(currentRefreshToken);
      set({ accessToken: result.accessToken });

      // Actualizar el nuevo token en AsyncStorage
      await AsyncStorage.setItem('accessToken', result.accessToken);
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  },

  // Función para cerrar sesión
  logout: async () => {
    set({
      accessToken: null,
      refreshToken: null,
      isAuth: false,
    });

    // Eliminar tokens de AsyncStorage
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
  },

  // Función para restaurar tokens almacenados por su se vencen
  restoreTokens: async () => {
    const storedAccessToken = await AsyncStorage.getItem('accessToken');
    const storedRefreshToken = await AsyncStorage.getItem('refreshToken');

    if (storedAccessToken && storedRefreshToken) {
      set({
        accessToken: storedAccessToken,
        refreshToken: storedRefreshToken,
        isAuth: true,
      });
    }
  },
}));

export default useAuthStore;
