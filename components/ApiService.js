import AsyncStorage from '@react-native-async-storage/async-storage';

class ApiService {
  constructor() {
    this.baseUrl = 'http://localhost:8000/api'; // Update with your Laravel API URL
    this.tokenKey = '@auth_token'; // Key used to store the token in AsyncStorage
  }

  // Sign-up API call
  signUp = async (name, email, password) => {
    try {
      const response = await fetch(`${this.baseUrl}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token in AsyncStorage
        await AsyncStorage.setItem(this.tokenKey, data.token);
        return true;
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  // Login API call
  login = async (email, password) => {
    try {
      const response = await fetch(`${this.baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token in AsyncStorage
        await AsyncStorage.setItem(this.tokenKey, data.token);
        return true;
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Logout by removing the token from AsyncStorage
  logout = async () => {
    try {
      await AsyncStorage.removeItem(this.tokenKey);
    } catch (error) {
      console.log('Error while logging out:', error);
    }
  };

  // Check if the user is authenticated
  isAuthenticated = async () => {
    try {
      const token = await AsyncStorage.getItem(this.tokenKey);
      return token !== null;
    } catch (error) {
      console.log('Error while checking authentication:', error);
      return false;
    }
  };

  // Get the stored token from AsyncStorage
  getToken = async () => {
    try {
      return await AsyncStorage.getItem(this.tokenKey);
    } catch (error) {
      console.log('Error while getting token:', error);
      return null;
    }
  };

  // Perform authenticated API requests
  request = async (url, method = 'GET', body = null) => {
    try {
      const token = await this.getToken();

      if (!token) {
        throw new Error('No token found. Please login.');
      }

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const options = {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      };

      const response = await fetch(`${this.baseUrl}/${url}`, options);
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export default new ApiService();
